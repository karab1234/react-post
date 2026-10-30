function workshops() {
    return (
        <main className="container">
            <h1>upcoming workshops</h1>

            <div className="card">
                    <sectionTittle tittle="intro to React" />
                    <p className="level"> Beginner - 2 hours</p>
                    <p> component, jsx and props, built fron scratch</p>
                    <button className="btn btn-primary"></button>
                </section>

                <section className="card">
                    <sectionTittle tittle="React state and event" />
                    <p className="level"> Beginner - 3 hours</p>
                    <p> make your interface respond to  click and typing.</p>
                    <button className="btn btn-primary"></button>
                </section>


              <section className="card">
                    <sectionTittle tittle="Deploying React Apps" />
                    <p className="level"> intermidiate - 1.5 hours</p>
                    <p> put your project with a life link .</p>
                    <button className="btn btn-primary">join waitlinmjb st</button>
                </section>

            </div>
        </main>
    )
}

export default workshops;

function sectionTittle(props) {
    return(
        <h2> (orios.tittle)</h2>
    )
}
function button({label, varlant}) {
    return (
        <button className={'btn btn-(varlent)'}>(label)</button>
    )
}
            