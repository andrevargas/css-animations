(function() {

    const scenes = document.querySelectorAll('div.scene');
    const scenesMap = {};
    const scenesIds = [];

    Array.from(scenes).forEach(item => {
        const id = item.dataset.id;
        scenesMap[id] = item;
        scenesIds.push(id);
    });

    function onClick(event) {
        const sceneToGo = event.target.dataset.content;
        scenesMap[sceneToGo].classList.add('active');
        scenesIds
            .filter(id => id !== sceneToGo)
            .forEach(id =>
                scenesMap[id].classList.remove('active')
            );
    }

    const items = document.querySelectorAll('nav.menu li a');
    const itemsArray = Array.from(items);

    itemsArray.forEach(item => {
        item.addEventListener('click', onClick);
    });

}());
