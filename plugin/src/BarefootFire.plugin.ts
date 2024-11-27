import { normalizePath, Plugin, WorkspaceLeaf } from 'obsidian'

import { BarefootFireContainer } from './BarefootFire.container'
import { BarefootFireSettingTab } from './BarefootFire.settings'
import { BarefootFirePluginSettings } from './BarefootFire.types'
import { BAREFOOT_FIRE_VIEW_TYPE, DEFAULT_SETTINGS } from './BarefootFire.defaults'

export type Cache = Record<string, unknown>
export const DEFAULT_CACHE: Cache = {}

export class BarefootFirePlugin extends Plugin {
  settings: BarefootFirePluginSettings
  cache: Cache

  async onload(): Promise<void> {
    await Promise.all([this.loadSettings(), this.loadCache()])

    this.registerView(BAREFOOT_FIRE_VIEW_TYPE, (leaf) => new BarefootFireContainer(leaf, this.settings))

    this.addRibbonIcon('flame', 'Barefoot F.I.R.E.', () => {
      this.activateView()
    })

    this.addSettingTab(new BarefootFireSettingTab(this.app, this))
  }

  async onunload(): Promise<void> {}

  async loadSettings(): Promise<void> {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData())
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings)
  }

  async loadCache(): Promise<void> {
    this.cache = Object.assign({}, DEFAULT_CACHE, await this.loadCacheFromDisk())
  }

  async loadCacheFromDisk(): Promise<Cache> {
    const path = normalizePath(`${this.manifest.dir}/cache.json`)
    if (!(await this.app.vault.adapter.exists(path))) {
      await this.app.vault.adapter.write(path, '{}')
    }
    return JSON.parse(await this.app.vault.adapter.read(path)) as Cache
  }

  async saveCache(): Promise<void> {
    await this.app.vault.adapter.write(normalizePath(`${this.manifest.dir}/cache.json`), JSON.stringify(this.cache))
  }

  async activateView(): Promise<void> {
    const { workspace } = this.app

    let leaf: WorkspaceLeaf | null = null
    const leaves = workspace.getLeavesOfType(BAREFOOT_FIRE_VIEW_TYPE)

    if (leaves.length > 0) {
      // A leaf with our view already exists, use that
      leaf = leaves[0]
    } else {
      // Our view could not be found in the workspace, create a new leaf
      // in the right sidebar for it
      leaf = workspace.getRightLeaf(false)
      await leaf?.setViewState({ type: BAREFOOT_FIRE_VIEW_TYPE, active: true })
    }

    // "Reveal" the leaf in case it is in a collapsed sidebar
    if (leaf) workspace.revealLeaf(leaf)
  }
}
