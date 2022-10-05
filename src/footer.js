import React from 'react';
import './footer.css'
import highhub from './assets/highlanderhub.jpg'
import instagram from './assets/instagram.png'
import discord from './assets/discord.png'



class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div class="footer justify-content-center">
                    <div class='left'>
                        <h1>Kids Who Code</h1>
                    </div>
                    <div class='right'>
                        <h1>Contact Us:</h1>
                        <a target="_blank" href="https://discord.gg/jfr262N3he" rel="noreferrer">
                            <img class="icon" src={discord} alt="Discord Logo"></img>
                        </a>                        
                        <a target="_blank" href="https://www.instagram.com/njitkidswhocode" rel="noreferrer">
                            <img class="icon" src={instagram} alt="Instagram Logo"></img>
                        </a>
                        <a target="_blank" href="https://njit.campuslabs.com/engage/organization/kidswhocode" rel="noreferrer">
                            <img class="icon" src={highhub} alt="Highlander Hub Logo"></img>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
