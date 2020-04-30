import React from 'react'
import './Profile.scss'

function Profile() {
    return (
        <content className="content">
        <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"></img>
        <div className="person">
          <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png"></img>
          <div className="person-info">
          <p>
          Konstantin Zverev <br></br> <br></br>
  
          Date of birth: 10.08.1994 <br></br>
          City: Smolensk <br></br>
          Language: russian <br></br>
          Married: no <br></br>
          </p>
          </div>
          <div className="new-posts">
          <h2>Create new post</h2>
          <textarea placeholder="typing yiur post here"></textarea><br></br>
          <button>Add post</button>
          </div>
          <div className="my-posts">
            <h2>My posts</h2>
            <p>
            The Neo Geo CD is the second home video game console of SNK's Neo Geo family, released in 1994, four years after its cartridge-based equivalent. The unit's 1X CD-ROM drive was slow, with very long loading times, and the system could also play audio CDs. The Neo Geo CD was launched bundled with a control pad, instead of a joystick like the previous AES version. However, the original AES joystick can be used with all three Neo Geo CD models.
            </p>
            <p>
            The picture shows the top-loader model of the Neo Geo CD system, with a plugged-in controller consisting of an analog stick, four colored buttons, and two buttons labelled "select" and "start". The CD-ROM drive and the power button are visible at the top of the console, with two controller ports at the front.
            </p>
          </div>
        </div>
        </content>
    )
}

export default Profile