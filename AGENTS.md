# manueld: agent notes

Manuel's personal portfolio site (SvelteKit, frontend only). Package manager: bun (`bun.lock`).

## Cloudflare: this project is bound to the manueldiamond profile

- Account: `Manueldiamondlistowell@gmail.com's Account` (id `96ce78e9b0451ed1c4b3adf30e7abcd6`), login `manueldiamondlistowell@gmail.com`.
- Domain: `manueldiamond.com` (zone id `3e2d57b4a8379c7e03d67606780f1137`). The site is the Cloudflare Pages project `manueld`.
- The wrangler login for it lives in `/Users/manuelashong/.config/cloudflare-profiles/manueldiamond`. Run every wrangler command for this project with that profile:

  ```sh
  XDG_CONFIG_HOME=/Users/manuelashong/.config/cloudflare-profiles/manueldiamond pnpm dlx wrangler@4 whoami
  ```

- Never run `wrangler login` or `wrangler logout` without `XDG_CONFIG_HOME` set as above. The default wrangler login on this Mac is a different account (`misterkumi@gmail.com`, client work) and must stay as it is.

## Email

- Public contact address: `info@manueldiamond.com`, forwarded by Cloudflare Email Routing to `manueldiamondlistowell@gmail.com`.
