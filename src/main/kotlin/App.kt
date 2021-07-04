import data.Description
import extension.Extensions.descript
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.div
import react.dom.h1

@JsExport
class App : RComponent<RProps, RState>() {

    override fun RBuilder.render() {
        h1 {
            +"Hello, React + Kotlin/JS!"
        }
        div {
            descript {
                descriptions = listOf(
                    Description(1, "Language", "Kotlin/JS"),
                    Description(2, "Build tool", "Gradle (Kotlin DSL)"),
                    Description(3, "Framework", "React")
                )
            }
        }
    }
}