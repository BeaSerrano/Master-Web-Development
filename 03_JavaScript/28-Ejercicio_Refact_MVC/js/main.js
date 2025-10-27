//! Main: arranca la aplicación

import { Model } from './model.js'
import { View } from './view.js'
import { Controller } from './controller.js'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('.container');
    const model = new Model()
    const view = new View(root)
    new Controller(model, view)
})