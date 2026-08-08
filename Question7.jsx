function Header(){
    return(
        <div>
        <h1>Student Portfolio</h1>
        </div>
    )
}
function Name(){
    return(
        <div>
        
        <p>Name:</p>
        <p>Rushy Dawe</p>
        </div>
    );
}

function Id(){
    return(
        <div>
        <p>ID:</p>
        <p>Rus123</p>
        </div>
    );
}

function Parents(){
    return(
        <div>
            <p>
                Parent/Guardian:
            </p>
            <p>Swed Dawe</p>
        </div>
    );
}

function Skills(){
    return(
        <div>
            <p>
                PSkills:
            </p>
       <ul>
        <li>DSA</li>
        <li>Web dev</li>
        <li>Programing</li>
       </ul>
        </div>
    );
}
function Internship(){
    return(
        <div>
            <p>
               Internship:
            </p>
            <p>Currently searching...</p>
        </div>
    );
}
function Degree(){
    return(
        <div>
            <p>
              Studies :
            </p>
            <p>Pursuing Engineering</p>
        </div>
    );
}
function Contact(){
    return(
        <div>
            <p>
                Contact:
            </p>
            <p>1234+6777</p>
        </div>
    );
}

function Question7(){
    return(
        <div>
            <Header/>
            <Name/>
            <Id/>
            <Parents/>
            <Skills/>
            <Internship/>
            <Degree/>
            <Contact/>

        </div>
    );
}

export default Question7;