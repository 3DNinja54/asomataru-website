import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Commands.css';

class Commands extends Component {
	render() {
		return (
			<div>
				<div id="navbar">
					<ul id="navbar-list">
						<li class="navbar-content">
							<Link to="/">Home</Link>
						</li>
						<li class="navbar-content">
							<Link to="/commands">Commands</Link>
						</li>
					</ul>
				</div>
				<h1>Commands!</h1>
				<h2>General</h2>
				<div id="table">
					<div class="div-content-info">
						<p>
							() - Required <br />
							{'{}'} - Optional <br />
							<span id="disclaimer">
								Do not include these symbols when using a
								command!
							</span>
						</p>
					</div>
					<table>
						<tbody>
							<tr>
								<td>Command</td>
								<td>Usage</td>
								<td>Description</td>
							</tr>
							<tr>
								<td>Anime</td>
								<td>a!anime</td>
								<td>Sends an anime art into channel.</td>
							</tr>
							<tr>
								<td>Avatar</td>
								<td>a!avatar {'@mention'}</td>
								<td>
									Returns the image or gif (for nitro users)
									of a Discord account.
								</td>
							</tr>
							<tr>
								<td>Birthday</td>
								<td>a!birthday</td>
								<td>
									Shows upcoming birthdays and shows a
									gif/image for people who submits their
									birthdays to The3D#1120.
								</td>
							</tr>
							<tr>
								<td>Cat</td>
								<td>a!cat</td>
								<td>Returns a cat image, meow!</td>
							</tr>
							<tr>
								<td>Coinflip</td>
								<td>a!coinflip</td>
								<td>
									Flip a coin that lands on heads or tails.
								</td>
							</tr>
							<tr>
								<td>Credits</td>
								<td>a!credits</td>
								<td>
									A list of my discord friends who I adore!
								</td>
							</tr>
							<tr>
								<td>Dog</td>
								<td>a!dog</td>
								<td>Returns a dog image, woof!</td>
							</tr>
							<tr>
								<td>Joke</td>
								<td>a!joke</td>
								<td>Returns a joke! (Can be unfunny)</td>
							</tr>
							<tr>
								<td>Kiss</td>
								<td>a!kiss {'@mention'}</td>
								<td>Kisses the user you mention!</td>
							</tr>
							<tr>
								<td>Moe</td>
								<td>a!moe</td>
								<td>Returns an image from r/moemorphism</td>
							</tr>
							<tr>
								<td>Neko</td>
								<td>a!neko</td>
								<td>Returns the image of an neko! UwU!</td>
							</tr>
							<tr>
								<td>RPS</td>
								<td>a!rps (react to messsage)</td>
								<td>
									Play rock, paper, scissors against
									Asomataru!
								</td>
							</tr>
							<tr>
								<td>Server Info</td>
								<td>a!serverinfo</td>
								<td>
									Returns information about the server this
									command is used in.
								</td>
							</tr>
							<tr>
								<td>Topic</td>
								<td>a!topic</td>
								<td>Starts up a topic in the channel!</td>
							</tr>
							<tr>
								<td>Useless Fact</td>
								<td>a!uselessfact</td>
								<td>
									Returns a useless fact like how rubber-bands
									last longer when refrigerated.
								</td>
							</tr>
							<tr>
								<td>User Info</td>
								<td>a!userinfo {'@mention'}</td>
								<td>
									Returns information about a Discord Account.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Commands;
