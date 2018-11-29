<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
		</div>
		<router-view/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			actors: [
				{
					id: 1,
					name: "Tom Hardy",
					tmdb: 2524,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//4CR1D9VLWZcmGgh4b6kKuY2NOel.jpg"
				},
				{
					id: 2,
					name: "Jocelyn Hudon",
					tmdb: 1522345,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//nTeH73Cg7ikfTlUevrRWuFu3oaj.jpg"
				},
				{
					id: 3,
					name: "Scott Cavalheiro",
					tmdb: 1026883,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//AeeF2uiZVv1mgWRpNjR2g2TEmFq.jpg"
				},
				{
					id: 4,
					name: "Rose Byrne",
					tmdb: 9827,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//5Vd88XcVcZep20gWvuCGCxp5FFA.jpg"
				},
				{
					id: 5,
					name: "Beyoncé Knowles",
					tmdb: 14386,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//xYCtL5BpQFALZGYibVPFsebUs6q.jpg"
				},
				{
					id: 6,
					name: "Keanu Reeves",
					tmdb: 6384,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//bOlYWhVuOiU6azC4Bw6zlXZ5QTC.jpg"
				},
				{
					id: 7,
					name: "Katherine Waterston",
					tmdb: 77795,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//zgLVX4KJJ6hTD2niGLchkzjfWpJ.jpg"
				},
				{
					id: 8,
					name: "Scarlett Johansson",
					tmdb: 1245,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//tHMgW7Pg0Fg6HmB8Kh8Ixk6yxZw.jpg"
				},
				{
					id: 9,
					name: "Eddie Redmayne",
					tmdb: 37632,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//bHipa1GkpedD32w2OIRg5axdkQ6.jpg"
				},
				{
					id: 10,
					name: "Cate Blanchett",
					tmdb: 112,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//5HikVWKfkkUa8aLdCMHtREBECIn.jpg"
				},
				{
					id: 11,
					name: "Sean Bean",
					tmdb: 48,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//iIxP2IzvcLgr5WaTBD4UfSqaV3q.jpg"
				},
				{
					id: 12,
					name: "Michelle Williams",
					tmdb: 1812,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//r4HQM2gO9Q7Ti7sJcRE4hcP8ddN.jpg"
				},
				{
					id: 13,
					name: "Eva Green",
					tmdb: 10912,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//wqK0BhMuNBvDqIg1bwT9RhYMy6L.jpg"
				},
				{
					id: 14,
					name: "Henry Cavill",
					tmdb: 73968,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//hErUwonrQgY5Y7RfxOfv8Fq11MB.jpg"
				},
				{
					id: 15,
					name: "Gal Gadot",
					tmdb: 90633,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//hzt1aV8FzEJlUtiWtrGSHlcdGCx.jpg"
				},
				{
					id: 16,
					name: "Tom Cruise",
					tmdb: 500,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//3oWEuo0e8Nx8JvkqYCDec2iMY6K.jpg"
				},
				{
					id: 17,
					name: "Kimberly Sustad",
					tmdb: 1292329,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//syBA7Scz1LsY9zymB1wvR4a4RMO.jpg"
				},
				{
					id: 18,
					name: "India Eisley",
					tmdb: 221116,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//7dmchBMMzEvUG7pkEGYdyQ35Y3F.jpg"
				},
				{
					id: 19,
					name: "Chloë Grace Moretz",
					tmdb: 56734,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//sk6we3WfYppsx5KjMVzQGYEXpD2.jpg"
				},
				{
					id: 20,
					name: "Carla Gugino",
					tmdb: 17832,
					photo:
						"https://image.tmdb.org/t/p/w600_and_h900_bestv2//wVTVni6Rjc358KWQe8m8cFJE9vi.jpg"
				}
			],
			movies: [
				{
					vote_average: 8.2,
					vote_count: 19702,
					id: 1,
					video: false,
					media_type: "movie",
					title: "Inception",
					popularity: 25.978,
					poster_path: "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
					original_language: "en",
					original_title: "Inception",
					genre_ids: [28, 53, 878, 9648, 12],
					backdrop_path: "/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg",
					adult: false,
					overview:
						"Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
					release_date: "2010-07-15",
					tmdb: 27205
				},
				{
					vote_average: 7.4,
					vote_count: 13014,
					id: 2,
					video: false,
					media_type: "movie",
					title: "Mad Max: Fury Road",
					popularity: 22.633,
					poster_path: "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
					original_language: "en",
					original_title: "Mad Max: Fury Road",
					genre_ids: [28, 12, 878, 53],
					backdrop_path: "/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg",
					adult: false,
					overview:
						"An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
					release_date: "2015-05-13",
					tmdb: 76341
				},
				{
					vote_average: 7.7,
					vote_count: 12518,
					id: 3,
					video: false,
					media_type: "movie",
					title: "The Dark Knight Rises",
					popularity: 20.586,
					poster_path: "/dEYnvnUfXrqvqeRSqvIEtmzhoA8.jpg",
					original_language: "en",
					original_title: "The Dark Knight Rises",
					genre_ids: [28, 80, 18, 53],
					backdrop_path: "/f6ljQGv7WnJuwBPty017oPWfqjx.jpg",
					adult: false,
					overview:
						"Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
					release_date: "2012-07-16",
					tmdb: 49026
				},
				{
					vote_average: 5.6,
					vote_count: 3877,
					id: 4,
					video: false,
					media_type: "movie",
					title: "Pixels",
					popularity: 13.12,
					poster_path: "/h5lnhUIS7HwcOBEEOc7coRlhylh.jpg",
					original_language: "en",
					original_title: "Pixels",
					genre_ids: [28, 35, 878],
					backdrop_path: "/giwHyGSqtpY9nMBwdAa8DOIk9IU.jpg",
					adult: false,
					overview:
						"Video game experts are recruited by the military to fight 1980s-era video game characters who've attacked New York.",
					release_date: "2015-07-16",
					tmdb: 257344
				},
				{
					vote_average: 6.1,
					vote_count: 310,
					id: 5,
					video: false,
					media_type: "movie",
					title: "Below Her Mouth",
					popularity: 12.894,
					poster_path: "/nTGbq37hYLuNy7YgMg0gVLma0NS.jpg",
					original_language: "en",
					original_title: "Below Her Mouth",
					genre_ids: [18, 10749],
					backdrop_path: "/okSVtwaS8DqLHGe1QQgREf2haCy.jpg",
					adult: false,
					overview:
						"An unexpected affair quickly escalates into a heart-stopping reality for two women whose passionate connection changes their lives forever.",
					release_date: "2017-02-10",
					tmdb: 370663
				},
				{
					vote_average: 6.4,
					vote_count: 20,
					id: 6,
					video: false,
					media_type: "movie",
					title: "On the Twelfth Day of Christmas",
					popularity: 2.583,
					poster_path: "/xeK4Y9ZjT8gY50Ugf1lTgIGoixw.jpg",
					original_language: "en",
					original_title: "On the Twelfth Day of Christmas",
					genre_ids: [10749, 10770],
					backdrop_path: "/vaLeS5OOc7mYmJQ9M3r9LQGezz5.jpg",
					adult: false,
					overview:
						"Maggie Chalke is torn between her journalistic integrity and helping her long time crush Mitch O'Grady when her boss orders her to write a story for the paper about the Secret Santa gifts she's been sending Mitch to help him relearn his love for Christmas.",
					release_date: "2015-12-12",
					tmdb: 366631
				},
				{
					vote_average: 7.2,
					vote_count: 7350,
					id: 7,
					video: false,
					media_type: "movie",
					title: "X-Men: First Class",
					popularity: 0.615,
					poster_path: "/7SSm7BfzFoVzmd6fCDccj7qRxc8.jpg",
					original_language: "en",
					original_title: "X-Men: First Class",
					genre_ids: [28, 878, 12],
					backdrop_path: "/39nstYsfjR6ggyKTtB4Joga2fs8.jpg",
					adult: false,
					overview:
						"Before Charles Xavier and Erik Lensherr took the names Professor X and Magneto, they were two young men discovering their powers for the first time. Before they were arch-enemies, they were closest of friends, working together with other mutants (some familiar, some new), to stop the greatest threat the world has ever known.",
					release_date: "2011-06-01",
					tmdb: 49538
				},
				{
					vote_average: 6.5,
					vote_count: 7321,
					id: 8,
					video: false,
					media_type: "movie",
					title: "X-Men: Apocalypse",
					popularity: 19.085,
					poster_path: "/zSouWWrySXshPCT4t3UKCQGayyo.jpg",
					original_language: "en",
					original_title: "X-Men: Apocalypse",
					genre_ids: [28, 12, 878, 14],
					backdrop_path: "/oQWWth5AOtbWG9o8SCAviGcADed.jpg",
					adult: false,
					overview:
						"After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
					release_date: "2016-05-18",
					tmdb: 246655
				},
				{
					vote_average: 6.5,
					vote_count: 6348,
					id: 9,
					video: false,
					media_type: "movie",
					title: "Star Wars: Episode II - Attack of the Clones",
					popularity: 9.291,
					poster_path: "/2vcNFtrZXNwIcBgH5e2xXCmVR8t.jpg",
					original_language: "en",
					original_title:
						"Star Wars: Episode II - Attack of the Clones",
					genre_ids: [12, 28, 878],
					backdrop_path: "/1Slt26IGf2XHqv8xjEJ7LMZqCYb.jpg",
					adult: false,
					overview:
						"Ten years after the invasion of Naboo, the galaxy is on the brink of civil war. Under the leadership of a renegade Jedi named Count Dooku, thousands of solar systems threaten to break away from the Galactic Republic. When an assassination attempt is made on Senator Padmé Amidala, the former Queen of Naboo, twenty-year-old Jedi apprentice Anakin Skywalker is assigned to protect her. In the course of his mission, Anakin discovers his love for Padmé as well as his own darker side. Soon, Anakin, Padmé, and Obi-Wan Kenobi are drawn into the heart of the Separatist movement and the beginning of the Clone Wars.",
					release_date: "2002-05-15",
					tmdb: 1894
				},
				{
					vote_average: 6.4,
					vote_count: 1501,
					id: 10,
					video: false,
					media_type: "movie",
					title: "Epic",
					popularity: 9.394,
					poster_path: "/dUeXOJCpfWmZd9KaPkq2122J1ji.jpg",
					original_language: "en",
					original_title: "Epic",
					genre_ids: [16, 12, 10751, 14],
					backdrop_path: "/v6w2o3ji8aVLph6zNgR5yDGQfmS.jpg",
					adult: false,
					overview:
						"A teenager finds herself transported to a deep forest setting where a battle between the forces of good and the forces of evil is taking place. She bands together with a rag-tag group characters in order to save their world -- and ours.",
					release_date: "2013-05-15",
					tmdb: 116711
				},
				{
					vote_average: 5.9,
					vote_count: 1501,
					id: 11,
					video: false,
					media_type: "movie",
					title: "Austin Powers in Goldmember",
					popularity: 10.196,
					poster_path: "/tFR7dTbX5BsmoUwKHfa2cWoZbwK.jpg",
					original_language: "en",
					original_title: "Austin Powers in Goldmember",
					genre_ids: [35, 80, 878],
					backdrop_path: "/mzZraP6PV34eVjB8giKbKIMXVeW.jpg",
					adult: false,
					overview:
						"The world's most shagadelic spy continues his fight against Dr. Evil. This time, the diabolical doctor and his clone, Mini-Me, team up with a new foe -- '70s kingpin Goldmember. While pursuing the team of villains to stop them from world domination, Austin gets help from his dad and an old girlfriend.",
					release_date: "2002-07-26",
					tmdb: 818
				},
				{
					vote_average: 5.7,
					vote_count: 861,
					id: 12,
					video: false,
					media_type: "movie",
					title: "The Pink Panther",
					popularity: 5.541,
					poster_path: "/eNzbcO8Mps96Zycg6DSFn9b1aO1.jpg",
					original_language: "en",
					original_title: "The Pink Panther",
					genre_ids: [28, 35, 80, 9648, 10751],
					backdrop_path: "/xT9awVPuIh8yWx1b2ODTpngY30M.jpg",
					adult: false,
					overview:
						"When the coach of the France soccer team is killed by a poisoned dart in the stadium in the end of a game, and his expensive and huge ring with the diamond Pink Panther disappears, the ambitious Chief Inspector Dreyfus assigns the worst police inspector Jacques Clouseau to the case.",
					release_date: "2006-02-10",
					tmdb: 12096
				},
				{
					vote_average: 8.1,
					vote_count: 12712,
					id: 13,
					video: false,
					media_type: "movie",
					title: "The Matrix",
					popularity: 19.798,
					poster_path: "/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
					original_language: "en",
					original_title: "The Matrix",
					genre_ids: [28, 878],
					backdrop_path: "/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
					adult: false,
					overview:
						"Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
					release_date: "1999-03-30",
					tmdb: 603
				},
				{
					vote_average: 7.1,
					vote_count: 8501,
					id: 14,
					video: false,
					media_type: "movie",
					title: "John Wick",
					popularity: 29.781,
					poster_path: "/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
					original_language: "en",
					original_title: "John Wick",
					genre_ids: [28, 53],
					backdrop_path: "/umC04Cozevu8nn3JTDJ1pc7PVTn.jpg",
					adult: false,
					overview:
						"Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
					release_date: "2014-10-22",
					tmdb: 245891
				},
				{
					vote_average: 6.8,
					vote_count: 4970,
					id: 15,
					video: false,
					media_type: "movie",
					title: "The Matrix Reloaded",
					popularity: 13.622,
					poster_path: "/ezIurBz2fdUc68d98Fp9dRf5ihv.jpg",
					original_language: "en",
					original_title: "The Matrix Reloaded",
					genre_ids: [12, 28, 53, 878],
					backdrop_path: "/Fp3piEuHXxKnPBO5R0Wj4wjZHg.jpg",
					adult: false,
					overview:
						"Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance.  Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition. But a nasty piece of news hits the human resistance: 250,000 machine sentinels are digging to Zion and would reach them in 72 hours. As Zion prepares for the ultimate war, Neo, Morpheus and Trinity are advised by the Oracle to find the Keymaker who would help them reach the Source.  Meanwhile Neo's recurrent dreams depicting Trinity's death have got him worried and as if it was not enough, Agent Smith has somehow escaped deletion, has become more powerful than before and has fixed Neo as his next target.",
					release_date: "2003-05-15",
					tmdb: 604
				},
				{
					vote_average: 7.4,
					vote_count: 10236,
					id: 16,
					video: false,
					media_type: "movie",
					title: "Fantastic Beasts and Where to Find Them",
					popularity: 46.709,
					poster_path: "/1M91Bt3oGspda75H9eLqYZkJzgO.jpg",
					original_language: "en",
					original_title: "Fantastic Beasts and Where to Find Them",
					genre_ids: [12, 10751, 14],
					backdrop_path: "/6I2tPx6KIiBB4TWFiWwNUzrbxUn.jpg",
					adult: false,
					overview:
						"In 1926, Newt Scamander arrives at the Magical Congress of the United States of America with a magically expanded briefcase, which houses a number of dangerous creatures and their habitats. When the creatures escape from the briefcase, it sends the American wizarding authorities after Newt, and threatens to strain even further the state of magical and non-magical relations.",
					release_date: "2016-11-16",
					tmdb: 259316
				},
				{
					vote_average: 5.9,
					vote_count: 4418,
					id: 17,
					video: false,
					media_type: "movie",
					title: "Alien: Covenant",
					popularity: 22.243,
					poster_path: "/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg",
					original_language: "en",
					original_title: "Alien: Covenant",
					genre_ids: [27, 878, 53],
					backdrop_path: "/6jajFcaY2YsfGQstJ5HaqZNVseX.jpg",
					adult: false,
					overview:
						"Bound for a remote planet on the far side of the galaxy, the crew of the colony ship 'Covenant' discovers what is thought to be an uncharted paradise, but is actually a dark, dangerous world—which has a sole inhabitant: the 'synthetic', David, survivor of the doomed Prometheus expedition.",
					release_date: "2017-05-09",
					tmdb: 126889
				},
				{
					vote_average: 6.8,
					vote_count: 2269,
					id: 18,
					video: false,
					media_type: "movie",
					title: "Steve Jobs",
					popularity: 7.039,
					poster_path: "/ahUiUaeOE2lvnOy7srxaUJbbvYv.jpg",
					original_language: "en",
					original_title: "Steve Jobs",
					genre_ids: [18, 36],
					backdrop_path: "/wKS99Y4xdKbRXiNN9p7mJCZVtRu.jpg",
					adult: false,
					overview:
						"Set backstage at three iconic product launches and ending in 1998 with the unveiling of the iMac, Steve Jobs takes us behind the scenes of the digital revolution to paint an intimate portrait of the brilliant man at its epicenter.",
					release_date: "2015-10-09",
					tmdb: 321697
				},
				{
					vote_average: 7.6,
					vote_count: 16925,
					id: 19,
					video: false,
					media_type: "movie",
					title: "The Avengers",
					popularity: 34.728,
					poster_path: "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
					original_language: "en",
					original_title: "The Avengers",
					genre_ids: [878, 28, 12],
					backdrop_path: "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
					adult: false,
					overview:
						"When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
					release_date: "2012-04-25",
					tmdb: 24428
				},
				{
					vote_average: 7.3,
					vote_count: 11858,
					id: 20,
					video: false,
					media_type: "movie",
					title: "Captain America: Civil War",
					popularity: 26.567,
					poster_path: "/kSBXou5Ac7vEqKd97wotJumyJvU.jpg",
					original_language: "en",
					original_title: "Captain America: Civil War",
					genre_ids: [12, 28, 878],
					backdrop_path: "/m5O3SZvQ6EgD5XXXLPIP1wLppeW.jpg",
					adult: false,
					overview:
						"Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
					release_date: "2016-04-27",
					tmdb: 271110
				},
				{
					vote_average: 7.3,
					vote_count: 11171,
					id: 21,
					video: false,
					media_type: "movie",
					title: "Avengers: Age of Ultron",
					popularity: 30.264,
					poster_path: "/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
					original_language: "en",
					original_title: "Avengers: Age of Ultron",
					genre_ids: [28, 12, 878],
					backdrop_path: "/rFtsE7Lhlc2jRWF7SRAU0fvrveQ.jpg",
					adult: false,
					overview:
						"When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
					release_date: "2015-04-22",
					tmdb: 99861
				},
				{
					vote_average: 7.9,
					vote_count: 5489,
					id: 22,
					video: false,
					media_type: "movie",
					title: "The Theory of Everything",
					popularity: 12.53,
					poster_path: "/4jspr8hLLuju59bCnMiefzRW4p0.jpg",
					original_language: "en",
					original_title: "The Theory of Everything",
					genre_ids: [18, 10749],
					backdrop_path: "/geAe08WmchATnZF461WffQBqJk1.jpg",
					adult: false,
					overview:
						"The Theory of Everything is the extraordinary story of one of the world’s greatest living minds, the renowned astrophysicist Stephen Hawking, who falls deeply in love with fellow Cambridge student Jane Wilde.",
					release_date: "2014-11-26",
					tmdb: 266856
				},
				{
					vote_average: 5.3,
					vote_count: 3959,
					id: 23,
					video: false,
					media_type: "movie",
					title: "Jupiter Ascending",
					popularity: 14.387,
					poster_path: "/aMEsvTUklw0uZ3gk3Q6lAj6302a.jpg",
					original_language: "en",
					original_title: "Jupiter Ascending",
					genre_ids: [878, 14, 28, 12],
					backdrop_path: "/4liSXBZZdURI0c1Id1zLJo6Z3Gu.jpg",
					adult: false,
					overview:
						"In a universe where human genetic material is the most precious commodity, an impoverished young Earth woman becomes the key to strategic maneuvers and internal strife within a powerful dynasty…",
					release_date: "2015-02-04",
					tmdb: 76757
				},
				{
					vote_average: 8.2,
					vote_count: 12762,
					id: 24,
					video: false,
					media_type: "movie",
					title: "The Lord of the Rings: The Fellowship of the Ring",
					popularity: 23.311,
					poster_path: "/56zTpe2xvaA4alU51sRWPoKPYZy.jpg",
					original_language: "en",
					original_title:
						"The Lord of the Rings: The Fellowship of the Ring",
					genre_ids: [12, 14, 28],
					backdrop_path: "/pIUvQ9Ed35wlWhY2oU6OmwEsmzG.jpg",
					adult: false,
					overview:
						"Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
					release_date: "2001-12-18",
					tmdb: 120
				},
				{
					vote_average: 8.4,
					vote_count: 11625,
					id: 25,
					video: false,
					media_type: "movie",
					title: "The Lord of the Rings: The Return of the King",
					popularity: 26.951,
					poster_path: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
					original_language: "en",
					original_title:
						"The Lord of the Rings: The Return of the King",
					genre_ids: [12, 14, 28],
					backdrop_path: "/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg",
					adult: false,
					overview:
						"Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
					release_date: "2003-12-01",
					tmdb: 122
				},
				{
					vote_average: 8.2,
					vote_count: 11017,
					id: 26,
					video: false,
					media_type: "movie",
					title: "The Lord of the Rings: The Two Towers",
					popularity: 17.836,
					poster_path: "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
					original_language: "en",
					original_title: "The Lord of the Rings: The Two Towers",
					genre_ids: [12, 14, 28],
					backdrop_path: "/dG4BmM32XJmKiwopLDQmvXEhuHB.jpg",
					adult: false,
					overview:
						"Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
					release_date: "2002-12-18",
					tmdb: 121
				},
				{
					vote_average: 8,
					vote_count: 10730,
					id: 27,
					video: false,
					media_type: "movie",
					title: "Shutter Island",
					popularity: 14.874,
					poster_path: "/aZqKsvpJDFy2UzUMsdskNFbfkOd.jpg",
					original_language: "en",
					original_title: "Shutter Island",
					genre_ids: [18, 53, 9648],
					backdrop_path: "/bcb3FYtLbuPgNYO4M1IY7rfeMal.jpg",
					adult: false,
					overview:
						"World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.",
					release_date: "2010-02-14",
					tmdb: 11324
				},
				{
					vote_average: 5.8,
					vote_count: 4446,
					id: 28,
					video: false,
					media_type: "movie",
					title: "Oz the Great and Powerful",
					popularity: 9.544,
					poster_path: "/7qzLIcYR7ev7iXngY8NKHBZHwwT.jpg",
					original_language: "en",
					original_title: "Oz the Great and Powerful",
					genre_ids: [14, 12, 10751],
					backdrop_path: "/4cCQkOv4GfQoTtDzHl54KS3S39N.jpg",
					adult: false,
					overview:
						"Oscar Diggs, a small-time circus illusionist and con-artist, is whisked from Kansas to the Land of Oz where the inhabitants assume he's the great wizard of prophecy, there to save Oz from the clutches of evil.",
					release_date: "2013-03-07",
					tmdb: 68728
				},
				{
					vote_average: 8,
					vote_count: 3862,
					id: 29,
					video: false,
					media_type: "movie",
					title: "The Greatest Showman",
					popularity: 19.988,
					poster_path: "/b9CeobiihCx1uG1tpw8hXmpi7nm.jpg",
					original_language: "en",
					original_title: "The Greatest Showman",
					genre_ids: [18],
					backdrop_path: "/zpq404Sk7qQ7N4x3xOeNgp74GtU.jpg",
					adult: false,
					overview:
						"The story of American showman P.T. Barnum, founder of the circus that became the famous traveling Ringling Bros. and Barnum & Bailey Circus.",
					release_date: "2017-12-20",
					tmdb: 316029
				},
				{
					vote_average: 6.7,
					vote_count: 5486,
					id: 30,
					video: false,
					media_type: "movie",
					title: "Miss Peregrine's Home for Peculiar Children",
					popularity: 11.616,
					poster_path: "/zhd7A4Wg18F8iTCVYBnqhnm9Od0.jpg",
					original_language: "en",
					original_title:
						"Miss Peregrine's Home for Peculiar Children",
					genre_ids: [18, 14, 12, 10751],
					backdrop_path: "/iiWLJMRaEjaBf4WFmKAktn0IfbF.jpg",
					adult: false,
					overview:
						"A teenager finds himself transported to an island where he must help protect a group of orphans with special powers from creatures intent on destroying them.",
					release_date: "2016-09-28",
					tmdb: 283366
				},
				{
					vote_average: 7.4,
					vote_count: 5374,
					id: 31,
					video: false,
					media_type: "movie",
					title: "Casino Royale",
					popularity: 14.645,
					poster_path: "/zlWBxz2pTA9p45kUTrI8AQiKrHm.jpg",
					original_language: "en",
					original_title: "Casino Royale",
					genre_ids: [12, 28, 53],
					backdrop_path: "/xq6hXdBpDPIXWjtmvbFmtLvBFJt.jpg",
					adult: false,
					overview:
						"Le Chiffre, a banker to the world's terrorists, is scheduled to participate in a high-stakes poker game in Montenegro, where he intends to use his winnings to establish his financial grip on the terrorist market. M sends Bond – on his maiden mission as a 00 Agent – to attend this game and prevent Le Chiffre from winning. With the help of Vesper Lynd and Felix Leiter, Bond enters the most important poker game in his already dangerous career.",
					release_date: "2006-11-14",
					tmdb: 36557
				},
				{
					vote_average: 5.8,
					vote_count: 3678,
					id: 32,
					video: false,
					media_type: "movie",
					title: "Dark Shadows",
					popularity: 9.284,
					poster_path: "/6125p54Jnog3kFsY33oMQF3d1dJ.jpg",
					original_language: "en",
					original_title: "Dark Shadows",
					genre_ids: [35, 14],
					backdrop_path: "/thzGA2cOW37jCxJ7sJeBNGVGZKj.jpg",
					adult: false,
					overview:
						"Vampire Barnabas Collins is inadvertently freed from his tomb and emerges into the very changed world of 1972. He returns to Collinwood Manor to find that his once-grand estate and family have fallen into ruin.",
					release_date: "2012-05-08",
					tmdb: 62213
				},
				{
					vote_average: 5.8,
					vote_count: 10707,
					id: 33,
					video: false,
					media_type: "movie",
					title: "Batman v Superman: Dawn of Justice",
					popularity: 26.179,
					poster_path: "/cGOPbv9wA5gEejkUN892JrveARt.jpg",
					original_language: "en",
					original_title: "Batman v Superman: Dawn of Justice",
					genre_ids: [28, 12, 14],
					backdrop_path: "/vsjBeMPZtyB7yNsYY56XYxifaQZ.jpg",
					adult: false,
					overview:
						"Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
					release_date: "2016-03-23",
					tmdb: 209112
				},
				{
					vote_average: 6.5,
					vote_count: 8814,
					id: 34,
					video: false,
					media_type: "movie",
					title: "Man of Steel",
					popularity: 16.74,
					poster_path: "/xWlaTLnD8NJMTT9PGOD9z5re1SL.jpg",
					original_language: "en",
					original_title: "Man of Steel",
					genre_ids: [28, 12, 14, 878],
					backdrop_path: "/jYLh4mdOqkt30i7LTFs3o02UcGF.jpg",
					adult: false,
					overview:
						"A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
					release_date: "2013-06-12",
					tmdb: 49521
				},
				{
					vote_average: 6.3,
					vote_count: 6142,
					id: 35,
					video: false,
					media_type: "movie",
					title: "Justice League",
					popularity: 38.279,
					poster_path: "/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
					original_language: "en",
					original_title: "Justice League",
					genre_ids: [28, 12, 14, 878],
					backdrop_path: "/o5T8rZxoWSBMYwjsUFUqTt6uMQB.jpg",
					adult: false,
					overview:
						"Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
					release_date: "2017-11-15",
					tmdb: 141052
				},
				{
					vote_average: 7.2,
					vote_count: 10788,
					id: 36,
					video: false,
					media_type: "movie",
					title: "Wonder Woman",
					popularity: 29.794,
					poster_path: "/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
					original_language: "en",
					original_title: "Wonder Woman",
					genre_ids: [28, 12, 14, 10752],
					backdrop_path: "/6iUNJZymJBMXXriQyFZfLAKnjO6.jpg",
					adult: false,
					overview:
						"An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
					release_date: "2017-05-30",
					tmdb: 297762
				},
				{
					vote_average: 6.7,
					vote_count: 6508,
					id: 37,
					video: false,
					media_type: "movie",
					title: "Fast & Furious 6",
					popularity: 1.439,
					poster_path: "/b9gTJKLdSbwcQRKzmqMq3dMfRwI.jpg",
					original_language: "en",
					original_title: "Fast & Furious 6",
					genre_ids: [28, 53, 80],
					backdrop_path: "/qjfE7SkPXpqFs8FX8rIaG6eO2aK.jpg",
					adult: false,
					overview:
						"Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets convoluted also facing his presumed deceased girlfriend, Letty.",
					release_date: "2013-05-21",
					tmdb: 82992
				},
				{
					vote_average: 7.6,
					vote_count: 7114,
					id: 38,
					video: false,
					media_type: "movie",
					title: "Edge of Tomorrow",
					popularity: 42.235,
					poster_path: "/tpoVEYvm6qcXueZrQYJNRLXL88s.jpg",
					original_language: "en",
					original_title: "Edge of Tomorrow",
					genre_ids: [28, 878],
					backdrop_path: "/7mgKeg18Qml5nJQa56RBZO7dIu0.jpg",
					adult: false,
					overview:
						"Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.",
					release_date: "2014-05-27",
					tmdb: 137113
				},
				{
					vote_average: 6.5,
					vote_count: 6267,
					id: 39,
					video: false,
					media_type: "movie",
					title: "Oblivion",
					popularity: 13.902,
					poster_path: "/hmOzkHlkGvi8x24fYpFSnXvjklv.jpg",
					original_language: "en",
					original_title: "Oblivion",
					genre_ids: [28, 878, 12, 9648],
					backdrop_path: "/8TE77jL2e4zdERpv8hnBAHUmFRx.jpg",
					adult: false,
					overview:
						"Jack Harper is one of the last few drone repairmen stationed on Earth.  Part of a massive operation to extract vital resources after decades of war with a terrifying threat known as the Scavs, Jack’s mission is nearly complete.  His existence is brought crashing down when he rescues a beautiful  stranger from a downed spacecraft.  Her arrival triggers a chain of events that  forces him to question everything he knows and puts the fate of humanity in his hands.",
					release_date: "2013-04-10",
					tmdb: 75612
				},
				{
					vote_average: 6.9,
					vote_count: 5473,
					id: 40,
					video: false,
					media_type: "movie",
					title: "Mission: Impossible - Ghost Protocol",
					popularity: 20.393,
					poster_path: "/khlcsYHr7Hi4Tkymc7UGDvcUcx.jpg",
					original_language: "en",
					original_title: "Mission: Impossible - Ghost Protocol",
					genre_ids: [28, 53, 12],
					backdrop_path: "/pc7a2qrIkIxzqWGqcexd3mHzIxy.jpg",
					adult: false,
					overview:
						"Ethan Hunt and his team are racing against time to track down a dangerous terrorist named Hendricks, who has gained access to Russian nuclear launch codes and is planning a strike on the United States. An attempt to stop him ends in an explosion causing severe destruction to the Kremlin and the IMF to be implicated in the bombing, forcing the President to disavow them. No longer being aided by the government, Ethan and his team chase Hendricks around the globe, although they might still be too late to stop a disaster.",
					release_date: "2011-12-07",
					tmdb: 56292
				},
				{
					vote_average: 5.3,
					vote_count: 49,
					id: 41,
					video: false,
					media_type: "movie",
					title: "Super Buddies",
					popularity: 3.178,
					poster_path: "/cCwEVGKj70vW7UUG0RE3yYnEukR.jpg",
					original_language: "en",
					original_title: "Super Buddies",
					genre_ids: [10751, 35],
					backdrop_path: "/unu6QXPqP9RWDxyA3frMwwbcmAx.jpg",
					adult: false,
					overview:
						"When the five puppies stumble upon the Five Power Rings of Inspiron (alien artifacts abandoned on Earth 16 years ago), they all develop super powers, and are enlisted in Captain Canine's battle against the evil Darkon alien Commander Drex. Captain Canine is commander of space ship Megasis and is from the planet Inspiron. He is the mortal enemy of the Commander Drex. In charge of protecting Princess Jorala and the Five Power Rings from Drex, Megasis places the rings in hiding on the planet Earth, and takes the form of a German Shepherd, intending to stay on earth in very deep cover. Adopted by aspiring young comic book artist Ian Shaeffer, and renamed Captain Canine, he spends 16 happy years on Earth, as Ian recounts the stories of his space adventures. But when the five Buddies discover the Power Rings and instantly develop superpowers, Captain Canine has to train them very quickly indeed - for Commander Drex is headed back to earth, and this time he's determined to succeed.",
					release_date: "2013-08-07",
					tmdb: 149910
				},
				{
					vote_average: 6.2,
					vote_count: 2373,
					id: 42,
					video: false,
					media_type: "movie",
					title: "Underworld: Awakening",
					popularity: 9.411,
					poster_path: "/ayazc5fQ2YAw7vjaE1WGlJWtGX9.jpg",
					original_language: "en",
					original_title: "Underworld: Awakening",
					genre_ids: [14, 28, 27],
					backdrop_path: "/8iNsXY3LPsuT0gnUiTBMoNuRZI7.jpg",
					adult: false,
					overview:
						"Having escaped years of imprisonment, vampire warrioress Selene finds herself in a changed world where humans have discovered the existence of both Vampire and Lycan clans and are conducting an all-out war to eradicate both immortal species. Now Selene must battle the humans and a frightening new breed of super Lycans to ensure the death dealers' survival.",
					release_date: "2012-01-19",
					tmdb: 52520
				},
				{
					vote_average: 5.4,
					vote_count: 2103,
					id: 43,
					video: false,
					media_type: "movie",
					title: "Underworld: Blood Wars",
					popularity: 14.915,
					poster_path: "/nHXiMnWUAUba2LZ0dFkNDVdvJ1o.jpg",
					original_language: "en",
					original_title: "Underworld: Blood Wars",
					genre_ids: [28, 14, 27, 18],
					backdrop_path: "/fXqGBlz4xtLZzo878sHUxtsVzpU.jpg",
					adult: false,
					overview:
						"Vampire death dealer Selene fends off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David and his father Thomas, she must stop the eternal war between Lycans and Vampires, even if it means she has to make the ultimate sacrifice.",
					release_date: "2016-11-24",
					tmdb: 346672
				},
				{
					vote_average: 5.2,
					vote_count: 171,
					id: 44,
					video: false,
					media_type: "movie",
					title: "Clinical",
					popularity: 6.614,
					poster_path: "/yDnaWPY7MNVaHA0IuUtkgkxGI1c.jpg",
					original_language: "en",
					original_title: "Clinical",
					genre_ids: [53],
					backdrop_path: "/sUKRP2rDqi2Kfh8c2xO8WJKi0sU.jpg",
					adult: false,
					overview:
						"A psychiatrist tries to put her life back together after a violent attack by seeking to repair the life of a new patient, but he has his own terrifying history.",
					release_date: "2017-01-13",
					tmdb: 433244
				},
				{
					vote_average: 7.1,
					vote_count: 6714,
					id: 45,
					video: false,
					media_type: "movie",
					title: "Kick-Ass",
					popularity: 7.839,
					poster_path: "/yZFrniO6qSwjTCosStXweYtczGT.jpg",
					original_language: "en",
					original_title: "Kick-Ass",
					genre_ids: [28, 80],
					backdrop_path: "/ngPkB9K8ZpIjv8HpIC8ExqAfG6H.jpg",
					adult: false,
					overview:
						"Dave Lizewski is an unnoticed high school student and comic book fan who one day decides to become a super-hero, even though he has no powers, training or meaningful reason to do so.",
					release_date: "2010-03-22",
					tmdb: 23483
				},
				{
					vote_average: 7.2,
					vote_count: 4797,
					id: 46,
					video: false,
					media_type: "movie",
					title: "(500) Days of Summer",
					popularity: 10.865,
					poster_path: "/5SjtNPD1bb182vzQccvEUpXHFjN.jpg",
					original_language: "en",
					original_title: "(500) Days of Summer",
					genre_ids: [35, 18, 10749],
					backdrop_path: "/yYw9cVdRJ4zzwxM2cTDXfT6JI6E.jpg",
					adult: false,
					overview:
						"Tom, greeting-card writer and hopeless romantic, is caught completely off-guard when his girlfriend, Summer, suddenly dumps him. He reflects on their 500 days together to try to figure out where their love affair went sour, and in doing so, Tom rediscovers his true passions in life.",
					release_date: "2009-07-17",
					tmdb: 19913
				},
				{
					vote_average: 7.2,
					vote_count: 4319,
					id: 47,
					video: false,
					media_type: "movie",
					title: "The Equalizer",
					popularity: 26.827,
					poster_path: "/2eQfjqlvPAxd9aLDs8DvsKLnfed.jpg",
					original_language: "en",
					original_title: "The Equalizer",
					genre_ids: [53, 28, 80],
					backdrop_path: "/hEJ52KqwOmyRpcihs10h7xOwN7e.jpg",
					adult: false,
					overview:
						"McCall believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when he meets Teri, a young girl under the control of ultra-violent Russian gangsters, he can’t stand idly by – he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.",
					release_date: "2014-09-24",
					tmdb: 156022
				},
				{
					vote_average: 6.4,
					vote_count: 5045,
					id: 48,
					video: false,
					media_type: "movie",
					title: "Night at the Museum",
					popularity: 10.355,
					poster_path: "/NUbCSwy2EQ9Z6psUjPqr3WdVI2.jpg",
					original_language: "en",
					original_title: "Night at the Museum",
					genre_ids: [28, 12, 35, 10751, 14],
					backdrop_path: "/m8wYZ28BUv1KO9PhzdaNV11lGQE.jpg",
					adult: false,
					overview:
						"Chaos reigns at the natural history museum when night watchman Larry Daley accidentally stirs up an ancient curse, awakening Attila the Hun, an army of gladiators, a Tyrannosaurus rex and other exhibits.",
					release_date: "2006-10-20",
					tmdb: 1593
				}
			],
			movieActor: [
				{ movieId: 27205, actorId: 2524 },
				{ movieId: 76341, actorId: 2524 },
				{ movieId: 49026, actorId: 2524 },
				{ movieId: 257344, actorId: 1522345 },
				{ movieId: 370663, actorId: 1522345 },
				{ movieId: 366631, actorId: 1026883 },
				{ movieId: 49538, actorId: 9827 },
				{ movieId: 246655, actorId: 9827 },
				{ movieId: 1894, actorId: 9827 },
				{ movieId: 116711, actorId: 14386 },
				{ movieId: 818, actorId: 14386 },
				{ movieId: 12096, actorId: 14386 },
				{ movieId: 603, actorId: 6384 },
				{ movieId: 245891, actorId: 6384 },
				{ movieId: 604, actorId: 6384 },
				{ movieId: 259316, actorId: 77795 },
				{ movieId: 126889, actorId: 77795 },
				{ movieId: 321697, actorId: 77795 },
				{ movieId: 24428, actorId: 1245 },
				{ movieId: 271110, actorId: 1245 },
				{ movieId: 99861, actorId: 1245 },
				{ movieId: 266856, actorId: 37632 },
				{ movieId: 76757, actorId: 37632 },
				{ movieId: 120, actorId: 112 },
				{ movieId: 122, actorId: 112 },
				{ movieId: 121, actorId: 112 },
				{ movieId: 11324, actorId: 1812 },
				{ movieId: 68728, actorId: 1812 },
				{ movieId: 316029, actorId: 1812 },
				{ movieId: 283366, actorId: 10912 },
				{ movieId: 36557, actorId: 10912 },
				{ movieId: 62213, actorId: 10912 },
				{ movieId: 209112, actorId: 73968 },
				{ movieId: 49521, actorId: 73968 },
				{ movieId: 141052, actorId: 73968 },
				{ movieId: 297762, actorId: 90633 },
				{ movieId: 82992, actorId: 90633 },
				{ movieId: 137113, actorId: 500 },
				{ movieId: 75612, actorId: 500 },
				{ movieId: 56292, actorId: 500 },
				{ movieId: 149910, actorId: 1292329 },
				{ movieId: 52520, actorId: 221116 },
				{ movieId: 346672, actorId: 221116 },
				{ movieId: 433244, actorId: 221116 },
				{ movieId: 23483, actorId: 56734 },
				{ movieId: 19913, actorId: 56734 },
				{ movieId: 156022, actorId: 56734 },
				{ movieId: 1593, actorId: 17832 }
			]
		}
	},
	methods: {
		getAgeById(id) {
			let index = this.actors.findIndex(actor => actor.id === id)
			let today = new Date()
			let actorDate = new Date(this.actors[index].dateBirth)
			return Math.floor((today - actorDate) * 3.16887646e-11)
		},
		getIndexById(id) {
			return this.actors.findIndex(actor => actor.id === id)
		},
		/*
		async getData() {
			const request = await fetch(
				"https://api.themoviedb.org/3/person/popular?api_key=30a9bd883b54f8b08a0247941e2bbec5&language=en-US&page=1"
			)
			const response = await request.json()

			let idActor = 1
			let idMovie = 1

			response.results.forEach(result => {
				// add actors tmdb
				if (!this.actors.some(actor => actor.tmdb === result.id)) {
					this.actors.push({
						id: idActor,
						name: result.name,
						tmdb: result.id,
						photo:
							"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" +
							result.profile_path
					})

					idActor++
				}

				// add movies
				result.known_for.forEach(movie => {
					if (movie.media_type === "movie") {
						movie.tmdb = movie.id
						if (
							!this.movies.some(
								movieStored => movieStored.tmdb === movie.tmdb
							)
						) {
							movie.id = idMovie
							this.movies.push(movie)
							idMovie++
							// movie and actor ids
							this.movieActor.push({
								movieId: movie.tmdb,
								actorId: result.id
							})
						}
					}
				})
			})
		}*/
	}
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
