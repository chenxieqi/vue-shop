/**
 * Storageカプセル化
 */

const STORAGE_KEY = 'vshop';

export default {
  setItem(key, value, module_name) {
		if (module_name) {
			let val = this.getItem(module_name)
			val[key] = value
			this.setItem(module_name, val)
		} else {
			let storage = this.getStorage()
			storage[key] = value
			window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage))
		}
  },
  getItem(key, module_name) {
    if (module_name) {
			let item = this.getItem(module_name)
			if (item) return item[key]
    }
    return this.getStorage()[key]
  },
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear(key, module_name) {
		let storage = this.getStorage()
		if (module_name) {
			if (!storage[module_name]) return
			delete storage[module_name][key]
		} else {
			delete storage[key]
		}
		window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage))
  }
}