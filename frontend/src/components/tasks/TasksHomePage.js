import { Link } from "react-router-dom"
export default function TasksHomePage(){
    return(
        <>
      tasks home page
      <ul>
        <li>we have three categores </li>
        <ol>
          <ul>
            <li>
              kids
            </li>
              <ol>
                <li>
                  click jackign
                </li>
                <li>
                  url spoofing
                </li>
                <li>
                  csrf examples(like changing of  passwords,posting of images in social media)
                </li>
              </ol>
            <li>
              developers
            </li>
            <ol>
                  <li>
                    code review
                  </li>
                  <li>o auth issues</li>
                  <li>data base issues(sql injection(union,time based,lgoin as admin))</li>
                  <li>xs leaks</li>
                  <li>
                    <Link to='/tasks/developer/protoTypePollution'>
                    prototype pollution
                    </Link>
                    </li>

                    <li>
                    <Link to='/tasks/developer/jwtNone'>
                    jwt none
                    </Link></li>

            </ol>
            <li>informative</li>
            <ol>
                  <li>public wifi using</li>
                  <li>bluetooth hacking</li>
            </ol>
          </ul>
        </ol>
      </ul>
      
        </>
    )
}