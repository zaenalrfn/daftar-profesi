
// membuat component dan menampilkan data daftar profesi
const dataProfesi = (d) => {
	const data = d.map((data) => {

		// mengambil data new profesi dan featured profesi
		const newProfesi = data.new;
		const featuredProfesi = data.featured;

		const dataLanguages = data.languages.join(' '),
			  dataTools = data.tools.join(' ');
		let	daftar = document.getElementById('daftar');

		const logoProfesi = document.createElement('img');
		logoProfesi.setAttribute('src', `${data.logo}`);
		logoProfesi.classList.add('logoProfesi');

		const companyProfesi = document.createElement('h3');
		companyProfesi.innerText = data.company;

		const positionProfesi = document.createElement('h1');
		positionProfesi.innerText = data.position;

		const postedAt = document.createElement('p');
		postedAt.innerText = data.postedAt;

		const contractProfesi = document.createElement('p');
		contractProfesi.innerText = data.contract;

		const locationProfesi = document.createElement('p');
		locationProfesi.innerText = data.location

		const pclProfesi = document.createElement('div');
		pclProfesi.classList.add('pclProfesi');
		pclProfesi.append(postedAt, contractProfesi, locationProfesi)

		const tagUlProfesi = document.createElement('ul');
		tagUlProfesi.classList.add('tagUlProfesi')
		tagUlProfesi.innerHTML = 
		`
			<li>${data.role}</li>
			<li>${data.level}</li>
			<li>${data.languages.join('    ')}</li>
			<li>${data.tools.join('    ')}</li>

		`
		const div_2 = document.createElement('div');
		div_2.classList.add('div_2');
		div_2.append(tagUlProfesi);

		const newP = document.createElement('h4'),
			  newF = document.createElement('h4');
			  newP.innerText = 'NEW!'
			  newF.innerText = 'FEATURED'


		const divNewFeatured = document.createElement('div');
		divNewFeatured.classList.add('newFeatured');
		divNewFeatured.append(companyProfesi);

		// bagian mengecek apakah daftar profesi new == true dan featured == true
		if (newProfesi && featuredProfesi) {
			newP.classList.add('newProfesi');
			newF.classList.add('featuredProfesi');
			divNewFeatured.append(companyProfesi, newP, newF)
		} else if (newProfesi) {
			newP.classList.add('newProfesi')
			divNewFeatured.append(companyProfesi, newP)
		}

		const div_1_0 = document.createElement('div');
		div_1_0.append(divNewFeatured, positionProfesi, pclProfesi);

		const divImgLogo = document.createElement('div');
		divImgLogo.classList.add('imgLogo');
		divImgLogo.append(logoProfesi, div_1_0)

		const divProfesi = document.createElement('div');
		divProfesi.classList.add('div_1');
		divProfesi.setAttribute('data-role', `${data.role}`);
		divProfesi.setAttribute('data-level', `${data.level}`);
		divProfesi.setAttribute('data-languages', `${dataLanguages}`);
		divProfesi.setAttribute('data-tools', `${dataTools}`);

		divProfesi.append(divImgLogo, div_2);


		daftar.append(divProfesi);
	})
}

// membuat live search bedasarkan attribute data- HTML
function liveSearch() {
	let boxes = document.querySelectorAll('.div_1');
    const ulLiTags = document.querySelectorAll('#ulTags li');
    for(ul of ulLiTags) {
    	const tag = ul.outerText
	    for (var i = 0; i < boxes.length; i++) {
	        if (boxes[i].getAttribute('data-languages').toLowerCase().includes(tag.toLowerCase()) || boxes[i].getAttribute('data-role').toLowerCase().includes(tag.toLowerCase()) || boxes[i].getAttribute('data-tools').toLowerCase().includes(tag.toLowerCase())) {
	            boxes[i].classList.remove("isHiden");
	        } else {
	            boxes[i].classList.add("isHiden");
	        }
	    }
    }

}
let typingTimer;
let typeInterval = 500;
let formInput = document.getElementById('searchForm');

formInput.addEventListener('submit', (event) => {
	event.preventDefault()
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
   searchTagInput();
});


// membuat input tag
const searchTagInput = () => {
	let searchTagInput = document.getElementById('searchProfesi').value,
		  ulTags = document.getElementById('ulTags'),
		  liTags = document.createElement('li'),
		  liRemove = document.createElement('p'); 
	liTags.innerText = searchTagInput;
	liRemove.innerHTML = '<img src="./images/icon-remove.svg">'
	liTags.append(liRemove)
	ulTags.append(liTags)

	liRemove.addEventListener('click', function() {
		liTags.remove();
	})
}


// refrensi
// https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/


// fitur selanjutnya harus ada clear input