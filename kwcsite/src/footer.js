import React from 'react';
import './footer.css'
import highhub from './highlanderhub.jpg'
import instagram from './instagram.png'
import discord from './discord.png'



class Footer extends React.Component {

    render() {
        let remMarg = {
            fontSize: 'xx-large',
            paddingLeft: '1%',

        }

        return (

            <footer>
                <div class="footer justify-content-center">

                    <div class='left'>
                        <h1 class="kwc" style={remMarg}>Kids Who Code</h1>
                    </div>
                    <div class='right'>
                        <h1 style={remMarg}>Contact Us:</h1>
                        <a target="_blank" href="https://njit.campuslabs.com/engage/organization/kidswhocode" rel="noreferrer">
                            <img class="highHub" src={discord} alt="Highlander Hub Logo"></img>
                        </a>                        <a target="_blank" href="https://njit.campuslabs.com/engage/organization/kidswhocode" rel="noreferrer">
                            <img class="highHub" src={instagram} alt="Highlander Hub Logo"></img>
                        </a>
                        <a target="_blank" href="https://njit.campuslabs.com/engage/organization/kidswhocode" rel="noreferrer">
                            <img class="highHub" src={highhub} alt="Highlander Hub Logo"></img>
                        </a>

                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;
