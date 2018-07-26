$(document).ready(function(){
 // Stockage des éléments HTLk
 	//le morceau mp3
 	var $zik 	=$('#audio')[0];


 	 //controls
 	 var $play	=$('play') ;
 	 var $pause =$('.pause') ;
 	 var $stop  =$('.stop') ;

 	 //Evénements
 	 	$play.click( jouer );
 	 	$pause.click( attente );	
 	 	$stop.click( arret );



 	 //Fonctions
 	 	function jouer(){
 	 		$zik.play();
 	 	}

 	 	function attente(){
 	 		$zik.pause();
 	 	}

 	 	function arret(){
 	 		$zik.pause();
 	 		$zik.currentTime = 0;
 	 	}
});