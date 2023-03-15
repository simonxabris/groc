import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"
import GitHub from "@auth/core/providers/github"
import { SvelteKitAuth } from "@auth/sveltekit"

console.log({GITHUB_ID})

export const handle = SvelteKitAuth({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
})