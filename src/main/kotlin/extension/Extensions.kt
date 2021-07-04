package extension

import component.AppDescription
import component.AppDescriptionProps
import react.RBuilder
import react.ReactElement

object Extensions {

    fun RBuilder.descript(handler: AppDescriptionProps.() -> Unit): ReactElement =
        child(AppDescription::class) {
            this.attrs(handler)
        }
}