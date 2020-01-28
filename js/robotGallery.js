var app = angular.module("robotGallery", ["ngAnimate"]);

	app.controller("gallery", ["$scope", "$document", function($scope, $document) {

		// properties for repeater
		$scope.artworks = [
				// {
				// 	name: "",
				// 	thumb: "images/thumbs/*_tmb.jpg",
				// 	image: "images/*",
				// 	desc: "",
				// 	desc2: "",
				// 	checkHidden: false
				// },
				{
					name: "A Machine for Worries",
					thumb: "images/thumbs/worries_tmb.jpg",
					image: "images/Machine-for-Worries.jpg",
					desc: "Acrylic and ink on canvas, 2019",
					desc2: "",
					checkHidden: false
				},
				{
				 	name: "Assorted Succulent City",
				 	thumb: "images/thumbs/assuci_tmb.jpg",
				 	image: "images/AssortedSucculentCity.jpg",
				 	desc: "Acrylic and ink on canvas, 2018",
				 	desc2: "",
				 	checkHidden: false
				},
				{
					name: "A Machine for the Caffeinated",
				 	thumb: "images/thumbs/caff_tmb.jpg",
				 	image: "images/MachineForTheCaffeinated.jpg",
				 	desc: "Acrylic and ink on canvas, 2018",
				 	desc2: "",
				 	checkHidden: false
				},
				{
					name: "Cloud Tail District",
				 	thumb: "images/thumbs/tailend_tmb.jpg",
				 	image: "images/Cloud-Tail-District.jpg",
				 	desc: "Acrylic and ink on canvas, 2018",
				 	desc2: "",
				 	checkHidden: false
				},
				{
					name: "Texas, Etc.",
					thumb: "images/thumbs/texas_tmb.jpg",
					image: "images/Texas-Etc.jpg",
					desc: "Acrylic and ink on wood panel, 2017, 72\"x48\" triptych.",
					desc2: "Commission for a friend.",
					checkHidden: false
				},
				{
					name: "Self-Portrait",
					thumb: "images/thumbs/selfport_tmb.jpg",
					image: "images/Self-Port.jpg",
					desc: "Digital painting in Photoshop, 2017.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Plastic Boats",
					thumb: "images/thumbs/boats_tmb.jpg",
					image: "images/Plastic-Boats.jpg",
					desc: "Acrylic on wood panel, 2016.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Cowboys",
					thumb: "images/thumbs/cowboys_tmb.jpg",
					image: "images/Cowboys.jpg",
					desc: "Acrylic on tree slice, 2016.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Indians",
					thumb: "images/thumbs/indians_tmb.jpg",
					image: "images/Indians.jpg",
					desc: "Acrylic on tree slice, 2016.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Bubbles",
					thumb: "images/thumbs/bubbles_tmb.jpg",
					image: "images/Bubbles.jpg",
					desc: "Acrylic on wood panel, 2015.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Paddleball",
					thumb: "images/thumbs/paddle_tmb.jpg",
					image: "images/Paddleball.jpg",
					desc: "Acrylic on wood panel, 2016.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Jumprope",
					thumb: "images/thumbs/jump_tmb.jpg",
					image: "images/Jumprope.jpg",
					desc: "Acrylic on wood panel, 2016.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Fractured Window",
				 	thumb: "images/thumbs/fract_tmb.jpg",
				 	image: "images/FracturedWindow.jpg",
				 	desc: "Acrylic on bamboo, 2015",
				 	desc2: "",
				 	checkHidden: false
				},
				{ 
					name: "A Quick Pose for a Stranger", 
					thumb: "images/thumbs/pose_tmb.jpg",
					image: "images/Quick-Pose.jpg",
					desc: "Acrylic on wood panel, 2008.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Sweet Radiation",
					thumb: "images/thumbs/rad_tmb.jpg",
					image: "images/Radiation.jpg",
					desc: "Acrylic on wood panel, 2009.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Hard at Work on an Easy Sell",
					thumb: "images/thumbs/sell_tmb.jpg",
					image: "images/Easy-Sell.jpg",
					desc: "Acrylic on wood panel, 2008.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Buy, Buy, Buy!",
					thumb: "images/thumbs/buy_tmb.jpg",
					image: "images/BuyBuy.jpg",
					desc: "Acrylic on wood panel, 2008. Gift for my father.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "The Skies are Mine",
					thumb: "images/thumbs/skies_tmb.jpg",
					image: "images/Skies.jpg",
					desc: "Acrylic on wood panel, 2010.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Underside District",
					thumb: "images/thumbs/underside_tmb.jpg",
					image: "images/Underside.jpg",
					desc: "Acrylic on Canvas, 2007.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Pacer Spacetruck",
					thumb: "images/thumbs/truck_tmb.jpg",
					image: "images/Pacer-spacetruck.jpg",
					desc: "Acrylic on wood panel, 2015.",
					desc2: "Commission for a friend as a birthday gift for his dad, who works for Pacer Stacktrain.",
					checkHidden: false
				},
				{
					name: "Torterra",
					thumb: "images/thumbs/tort_tmb.jpg",
					image: "images/Torterra.jpg",
					desc: "Digital painting in Photoshop, 2012.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Pong Girl",
					thumb: "images/thumbs/pong_tmb.jpg",
					image: "images/Uberpong.jpg",
					desc: "Digital painting in Photoshop, 2012.",
					desc2: "Cyberpong was a submission to the start-up Uberpong as part of their kickstarter. The client approached me asking for a piece of original artwork that would be printed directly to a ping-pong paddle and sold to the public, with me recieving a share of the profits. This was the final piece, though they ultimately only used the Red version. Unfortunately, the paddle is no longer available for sale.",
					checkHidden: false
				}
			]

			$scope.games = [
				// {
				// 	name: "",
				// 	thumb: "images/thumbs/",
				// 	image1: "",
				// 	image2: "",
				// 	image3: "",
				// 	image4: "",
				// 	image5: "",
				// 	image6: "",
				// 	desc: "",
				// 	desc2: "",
				// 	checkHidden: false
				// },
				{
					name: "Arnthak",
					thumb: "images/thumbs/arnthak-tmb.png",
					image1: "images/Arnthak-Title.png",
					image2: "images/Arnthak-Archmage.gif",
					image3: "images/Arnthak-Earth.gif",
					image4: "images/Arnthak-Guards.gif",
					image5: "",
					image6: "",
					desc: "Hammerspace Studios",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Lugdunon Logo",
					thumb: "images/thumbs/lugdunon_tmb.png",
					image1: "images/Lugdunon-Logo.png",
					image2: "images/Lugdunon-Logo2.png",
					image3: "",
					image4: "",
					image5: "",
					image6: "",
					desc: "",
					desc2: "",
					checkHidden: false
				}

			]

			$scope.designs = [
				{
					name: "Manic Glam by Kitty Fisher",
					thumb: "images/thumbs/manic_tmb.png",
					image1: "images/ManicGlam.png",
					image2: "",
					image3: "",
					image4: "",
					image5: "",
					image6: "",
					desc: "Manic Glam is an online boutique specializing in \"Trash Glasses\", sunglasses encrusted with charms centered around a particular theme. Each pair of glasses is a work of art in itself.",
					desc2: "",
					checkHidden: false
				}
				{
					name: "Lone Echo Brewing logo",
					thumb: "images/thumbs/loneecho_tmb.png",
					image1: "images/LoneEcho.png",
					image2: "",
					image3: "",
					image4: "",
					image5: "",
					image6: "",
					desc: "Lone Echo is a homebrewing operation, creating small batches for close friends. It's logo is centered around it's mascot, Echo, a well-trained, energetic miniture husky.",
					desc2: "",
					checkHidden: false
				}
				{
					name: "Postwriter band logo",
					thumb: "images/thumbs/postwriter_tmb.png",
					image1: "images/Postwriter.png",
					image2: "images/Postwriter2.png",
					image3: "",
					image4: "",
					image5: "",
					image6: "",
					desc: "Postwriter is a fusion of post-rock and slam-poetry created by Brandon Wilson and David Webber. Looping guitar sounds and hard hitting spoken verses combine to create a unique and impactful sound experience.",
					desc2: "Being friends with both members, I decided to create a logo for them pro bono. They wanted something calligraphic, which was new territory for me. I played with all sorts of letter forms, gradually refining the logo based on their feedback.",
					checkHidden: false
				},
				{
					name: "Body and Chi branding",
					thumb: "images/thumbs/bodyandchi_tmb.png",
					image1: "images/BodyandChi-Logo.png",
					image2: "images/BodyandChi-LogoW.png",
					image3: "images/BodyandChi-Card.png",
					image4: "",
					image5: "",
					image6: "",
					desc: "Body and Chi is a massage therapy studio run by Angie Pierce. Pierce had originally contracted my mother to create a new logo for her, but as my mother will admit, she is not a graphic designer, and passed the project on to me.",
					desc2: "The logo is based on a pendant that has a heart inside a twisted infinity loop. The heart represents Body, and the loop Chi, or energy.",
					checkHidden: false
				},
				{
					name: "Tin Roof Studio branding",
					thumb: "images/thumbs/tinroof_tmb.png",
					image1: "images/Tin-Roof-LogoB.png",
					image2: "images/Tin-Roof-LogoW.png",
					image3: "images/Tin-Roof-CardF.jpg",
					image4: "",
					image5: "",
					image6: "",
					desc: "Tin Roof Studio is the company my mother, Cecilia Bramhall, sells her art under. The name comes from her barn-converted art studio in Palastine, TX where she goes to get away from it all and focus on her art.",
					desc2: "The corrogated metal pattern lent itself well to being abstracted, making a simple yet bold and recognizable shape.",
					checkHidden: false
				},
				{
					name: "Keller Electric logo",
					thumb: "images/thumbs/keller_tmb.png",
					image1: "images/Keller-Electric-Logo.png",
					image2: "",
					image3: "",
					image4: "",
					image5: "",
					image6: "",
					desc: "Keller Electric is a one man electrical company owned by my uncle, Joe Keller. Uncle Joe served in the U.S. Navy aboard the 'Tecumseh' submarine, where he learned his trade as an electrician. He wanted to incorporate the crew's patch and pin into the logo, and I was more than happy to make that happen for him.",
					desc2: "",
					checkHidden: false
				},
				{
					name: "Raster Games branding",
					thumb: "images/thumbs/raster_tmb.png",
					image1: "images/Raster-Games-Logo.png",
					image2: "images/Raster-Games-Logo-BW.png",
					image3: "images/Raster-Games-Card.jpg",
					image4: "",
					image5: "",
					image6: "",
					desc: "Raster Games is a Norwegian indie game company headed by Aleksander Elvemo. In 2013, they were working on their first title, a strategy game called Star Solder. They had initially contracted me to work on the art assets for the game, but later agreed to have me do some of the design work for their company.",
					desc2: "The direction they requested was an obelisk or monolith rendered in arcade-style vector graphics, with a business card to match. ",
					checkHidden: false
				},
				{
					name: "Kerbal Space Program logos",
					thumb: "images/thumbs/ksp_tmb.png",
					image1: "images/Jebs-Junkyard-Logo.png",
					image2: "images/Goliath-Natl-Logo.png",
					image3: "images/Seans-Cannery-Logo.png",
					image4: "",
					image5: "",
					image6: "",
					desc: "Kerbal Space Program is an indie game by the company Squad. The game is about building rockets, launching little green men into space, and managing your own space program. The game was released in early alpha, allowing players to experience the game as it developed.",
					desc2: "Shortly before 1.0 release, the developers made an open call to submit logos for the game's fictional companies. Of those I submitted, these three were chosen to be added to the game. These logos are seen when accepting mission contracts from the in-game companies and can be set as your flag.",
					checkHidden: false
				},
				{
					name: "Carver Cafe menu template and chef business cards",
					thumb: "images/thumbs/carver_tmb.jpg",
					image1: "images/Carver-Menu-Fall.jpg",
					image2: "images/Carver-Menu-Spring.jpg",
					image3: "images/Carver-Card-F-Wright.jpg",
					image4: "images/Carver-Card-F-Carlton.jpg",
					image5: "images/Carver-Card-B.jpg",
					image6: "",
					desc: "Carver Cafe is a part of Carver Vocational Technical High School in Baltimore, MD. The cafe is staffed and run by students of the school's culinary program.",
					desc2: "The chefs were interested in getting a menu template that could be changed for each semester's menu. I created a spring and fall variant on a simple image that could be used as the background for most word processors. They also requested business cards, which I was happy to oblige.",
					checkHidden: false
				}
			]

			$scope.showMe = function(index, category) {

	 			var clickedWork = this.work;
				var categories = ["artworks", "games", "designs"];

				categories.forEach(function(cat) { //closes each other box besides the one clicked.
					var work = $scope[cat];
					work.filter(function(work, i) {
	 					return (cat + i !== category + index);
	 				}).forEach(function(work) {
	 					work.checkHidden = false;
	 				})
	 			})

				this.work.checkHidden = !this.work.checkHidden;
			}


			// NOTE: For hard coded id based version. Current version uses $index of each entry.

			// $scope.showMe = function() {
			// var clickedWork = this.work;
			// var categories = [$scope.artworks, $scope.games, $scope.designs];

			// categories.forEach(function(work) { //closes each other box besides the one clicked.
			// 		work.filter(function(work) {
	 		// 			return work.id !== clickedWork.id;
	 		// 		}).forEach(function(work) {
	 		// 			work.checkHidden = false;
	 		// 		})
	 		// 	})

	 		
	 		
			// NOTE: Did this section to have description close when clicking on document. Decided I didn't want it to do that after all.

			// $document.on("click", function(e) { 
			// 	//Console.logs are to check its working.
			// 	// console.log(e.target.tagName); 
			// 	// console.log(e.target.id.slice(0,5));

			// 	for(var i = 0; i < $scope.works.length; i++) {
			// 		// console.log($scope.works[i].id)

			// 		if(e.target.tagName == "IMG" && e.target.id == "thumb-" + $scope.works[i].id.toString()) {
			// 			$scope.works[i].checkHidden = !$scope.works[i].checkHidden;
			// 			// console.log($scope.works[i].checkHidden);
			// 		} else if(e.target.tagName == "IMG" && e.target.id.slice(0, 5) == "thumb" && e.target.id != "thumb-" + $scope.works[i].id.toString()) {
			// 			$scope.$apply(function() {
			// 				$scope.works[i].checkHidden = false;
			// 				// console.log($scope.works[i].checkHidden);
			// 			});
			// 		}
			// 	}

			// 	for(var i = 0; i < $scope.designs.length; i++) {
			// 		// console.log($scope.designs[i].id)

			// 		if(e.target.tagName == "IMG" && e.target.id == "thumb-" + $scope.designs[i].id.toString()) {
			// 			$scope.designs[i].checkHidden = !$scope.designs[i].checkHidden;
			// 			// console.log($scope.designs[i]);
			// 		} else if(e.target.tagName == "IMG" && e.target.id.slice(0, 5) == "thumb" && e.target.id != "thumb-" + $scope.designs[i].id.toString()) {
			// 			$scope.$apply(function() {
			// 				$scope.designs[i].checkHidden = false;
			// 				// console.log($scope.designs[i]);

			// 			});
			// 		}
			// 	}
			// });
	}]);