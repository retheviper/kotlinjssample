package com.retheviper.kotlinjssample

import com.retheviper.kotlinjssample.component.App
import kotlinx.browser.document
import react.dom.render

fun main() {
    render(document.getElementById("root")) {
        child(App::class) {}
    }
}