package com.retheviper.kotlinjssample.extension

import com.retheviper.kotlinjssample.component.AppDescription
import com.retheviper.kotlinjssample.component.AppDescriptionProps
import react.RBuilder
import react.ReactElement

object Extensions {

    fun RBuilder.descript(handler: AppDescriptionProps.() -> Unit): ReactElement =
        child(AppDescription::class) {
            this.attrs(handler)
        }
}