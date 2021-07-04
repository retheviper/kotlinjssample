package com.retheviper.kotlinjssample.component

import com.retheviper.kotlinjssample.data.Description
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.h3
import react.dom.p

external interface AppDescriptionProps : RProps {
    var descriptions: List<Description>
}

@JsExport
class AppDescription : RComponent<AppDescriptionProps, RState>() {

    override fun RBuilder.render() {
        h3 {
            +"Description"
        }
        props.descriptions.forEach {
            p {
                key = it.id.toString()
                +"${it.title}: ${it.content}"
            }
        }
    }
}