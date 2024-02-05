import React from 'react'
// import "../styles/Skills.css"
import "./Navbar"

const Skills = () => {
    return (
        <>
            <section class="skills" id="skills">
                <div class="max-width">
                    <h2 class="title">My skills</h2>
                    <div class="skills-content">
                        <div class="column left">
                            {/* <div class="text">My creative skills & experiences.</div> */}
                            
                        </div>
                        <div class="column right">
                            <div class="bars">
                                <div class="info">
                                    <span>Python</span>
                                    <span>90%</span>
                                </div>
                                <div class="line python"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>Django</span>
                                    <span>85%</span>
                                </div>
                                <div class="line django"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>Core Java</span>
                                    <span>80%</span>
                                </div>
                                <div class="line java"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>DSA</span>
                                    <span>90%</span>
                                </div>
                                <div class="line dsa"></div>
                            </div>


                            <div class="bars">
                                <div class="info">
                                    <span>React JS, next JS</span>
                                    <span>80%</span>
                                </div>
                                <div class="line react"></div>
                            </div>

                            <div class="bars">
                                <div class="info">
                                    <span>Postgres</span>
                                    <span>90%</span>
                                </div>
                                <div class="line postgres"></div>
                            </div>

                            <div class="bars">
                                <div class="info">
                                    <span>GIt, GitHub</span>
                                    <span>90%</span>
                                </div>
                                <div class="line git"></div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
