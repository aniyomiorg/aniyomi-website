import { defineLoader } from "vitepress"
import { Octokit } from "@octokit/rest"
import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types"

const octokit = new Octokit()

type GitHubReleaseList = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.listReleases>

declare const data: GitHubReleaseList
export { data }

export default defineLoader({
	async load(): Promise<GitHubReleaseList> {
		const releases = await octokit.paginate(octokit.repos.listReleases, {
			owner: "aniyomiorg",
			repo: "aniyomi",
			per_page: 100,
		})

		return releases.sort((a, b) => {
			const aDate = new Date(a.published_at!)
			const bDate = new Date(b.published_at!)

			if (aDate > bDate) return -1
			if (aDate < bDate) return 1
			return 0
		})
	},
})
