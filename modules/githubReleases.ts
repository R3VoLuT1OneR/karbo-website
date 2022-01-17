import fs from 'fs'
import path from 'path'

import { Octokit } from '@octokit/rest'
import { Module } from '@nuxt/types'

import { WalletDetails, WalletVersion, WalletType, WalletOS } from '../store/wallets'

const octokit = new Octokit()

/**
 * Module get release details with GitHub API transform them to Wallets store
 * data and saves into files in ./data folder.
 *
 * In local development we need to fetch the data once.
 * GitHub API has limits so we getting data from local files instead.
 */
const GithubReleases: Module = function () {
  const wallets: { version: WalletVersion, type: WalletType }[] = [
    { version: WalletVersion.Karbo, type: WalletType.CLI },
    { version: WalletVersion.Karbo, type: WalletType.Classic },
    { version: WalletVersion.Karbo, type: WalletType.Spring },
    { version: WalletVersion.Karbo, type: WalletType.Lite },
  ]

  this.nuxt.hook('build:before', async ({ force }: { force: boolean }) => {
    await Promise.all(wallets.map(async ({ version, type }) => {
      const filename = path.join(path.dirname(__dirname), 'data', `${version}-${type}.json`)

      if (!fs.existsSync(filename) || force) {
        const details = await loadReleaseDetails(version, type)
        fs.writeFileSync(filename, JSON.stringify(details))
      }
    }))
  })
}

const loadReleaseDetails = async (version: WalletVersion, type: WalletType) => {
  const { owner, repo, os: oses } = githubDetails[version][type]

  return await octokit.repos.listReleases({ owner, repo })
    .then((rsp): WalletDetails => {
      const version = rsp.data[0].tag_name
      return rsp.data[0].assets.reduce((acc, asset) => {
        for (const [os, regexp] of Object.entries(oses)) {
          if (regexp && regexp.test(asset.name)) {
            return {
              ...acc,
              [os]: {
                href: asset.browser_download_url,
                version,
                os,
              },
            }
          }
        }

        return acc
      }, {} as WalletDetails)
    })
}

const githubDetails = {
  karbowanec: {
    cli: {
      owner: 'seredat',
      repo: 'karbowanec',
      os: {
        [WalletOS.Windows]: /^Karbo-cli-win64/,
        [WalletOS.MacOS]: /^Karbo-cli-macOS/,
        [WalletOS.Ubuntu]: /^Karbo-cli-ubuntu20.04/,
      },
    },
    classic: {
      owner: 'seredat',
      repo: 'karbowanecwallet',
      os: {
        [WalletOS.Windows]: /^Karbo-wallet-win64-.*-install\.zip/,
        [WalletOS.MacOS]: /^Karbo-wallet-macOS/,
        [WalletOS.Ubuntu]: /^Karbo-wallet-ubuntu20.04/,
      },
    },
    spring: {
      owner: 'seredat',
      repo: 'Karbo-GUI',
      os: {
        [WalletOS.Windows]: /^karbowallet-win64/,
        [WalletOS.MacOS]: /^karbowallet-macOS/,
        [WalletOS.Ubuntu]: /^karbowallet-ubuntu-20.04/,
      },
    },
    lite: {
      owner: 'Karbovanets',
      repo: 'Karbo-lite',
      os: {
        [WalletOS.Windows]: /^KarboLite-wallet-win64/,
        [WalletOS.MacOS]: /^KarboLite-wallet-macOS/,
        [WalletOS.Ubuntu]: /^KarboLite-ubuntu20.04/,
      },
    },
  },
  karbo: {
    cli: {
      owner: 'Karbovanets',
      repo: 'karbo',
      os: {
        [WalletOS.Windows]: /^Karbo-cli-win64/,
        [WalletOS.MacOS]: /^Karbo-cli-macOS/,
        [WalletOS.Ubuntu]: /^Karbo-cli-ubuntu20.04/,
      },
    },
    classic: {
      owner: 'Karbovanets',
      repo: 'karbowanecwallet',
      os: {
        [WalletOS.Windows]: /^Karbo-wallet-win64-.*-install\.zip/,
        [WalletOS.MacOS]: /^Karbo-wallet-macOS/,
        [WalletOS.Ubuntu]: /^Karbo-wallet-ubuntu20.04/,
      },
    },
    spring: {
      owner: 'Karbovanets',
      repo: 'Karbo-GUI',
      os: {
        [WalletOS.Windows]: /^karbowallet-win64/,
        [WalletOS.MacOS]: /^karbowallet-macOS/,
        [WalletOS.Ubuntu]: /^karbowallet-ubuntu-20.04/,
      },
    },
    lite: {
      owner: 'Karbovanets',
      repo: 'Karbo-lite',
      os: {
        [WalletOS.Windows]: /^KarboLite-wallet-win64/,
        [WalletOS.MacOS]: /^KarboLite-wallet-macOS/,
        [WalletOS.Ubuntu]: /^KarboLite-ubuntu20.04/,
      },
    },
  },
}

export default GithubReleases
