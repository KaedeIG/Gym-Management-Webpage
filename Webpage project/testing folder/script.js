const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
	const tabInput = tab.querySelector('input[type="radio"]');
	tabInput.addEventListener('change', () => {
		const tabContents = document.querySelectorAll('.tab-content');
		tabContents.forEach(tabContent => {
			tabContent.style.display = 'none';
		});
		tab.querySelector('.tab-content').style.display = 'block';
	});
});
