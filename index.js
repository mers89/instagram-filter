function revertFilter() {
	Caman('#my-image', function () {
	    this.revert()
	  });
}

function applyFilter() {
	Caman('#my-image', function () {
  		this.sepia(50).render();
  		
	  });
}

// function applyFilter() {
// 	Caman('#my-image', function () {
// 	    this['vintage']();
// 	    this.render();
// 	  });
// }

