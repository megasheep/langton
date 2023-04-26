const canvas = document.createElement( 'canvas' ),
	  ctx = canvas.getContext( '2d' );
	  canvas.width = 600;
	  canvas.height = 600;
	  document.body.appendChild( canvas );

const canvas_ui = document.createElement( 'canvas' ),
	  ctx_ui = canvas_ui.getContext( '2d' );
	  canvas_ui.width = 600;
	  canvas_ui.height = 600;
	  document.body.appendChild( canvas_ui );

let ant = {
	x: 49,
	y: 49,
	dir: 'top'
};

( function init() {

	ctx.scale( 6, 6 );
	ctx.fillStyle = 'white';
	ctx.fillRect( 0, 0, 100, 100 );

	ctx_ui.scale( 6, 6 );
	ctx_ui.fillStyle = '#ff2d55';
	ctx_ui.textAlign = 'left';

	run();
} )();

function go( a,b,c,d ) {

	switch ( ant.dir ) {
		case a:
			ant.x -= 1;
			ant.dir = 'left';
			break;
		case b:
			ant.x += 1;
			ant.dir = 'right';
			break;
		case c:
			ant.y -= 1;
			ant.dir = 'top';
			break;
		case d:
			ant.y += 1;
			ant.dir = 'bottom';
			break;
	}
}

function run( nb ) {

	if ( ant.x < 0 ) ant.x = 99;
	if ( ant.y < 0 ) ant.y = 99;
	if ( ant.x > 99 ) ant.x = 0;
	if ( ant.y > 99 ) ant.y = 0;

	ctx_ui.clearRect( 0, 0, 100, 100 );
	ctx_ui.fillRect( ant.x, ant.y, 1, 1 );

	if ( ctx.getImageData( ant.x*6, ant.y*6, 1, 1 ).data[0] ) {
			ctx.fillStyle = 'black';
			ctx.fillRect( ant.x, ant.y, 1, 1 );
			go( 'bottom', 'top', 'left', 'right' );
	} else {
			ctx.fillStyle = 'white';
			ctx.fillRect( ant.x, ant.y, 1, 1 );
			go( 'top', 'bottom', 'right', 'left' );
	}

	ctx_ui.font= '3px Arial';
	ctx_ui.fillText( isNaN( nb ) ? nb = 0 : nb, 2, 4 );

	setTimeout( run, 1, nb+=1 );
}