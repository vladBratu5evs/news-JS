import { NewsSource } from '../../controller/interfaces.js';

export class Sources {
    public draw(data: NewsSource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement | null;

        if (!sourceItemTemp) return;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            const itemName = sourceClone.querySelector('.source__item-name');
            const itemContainer = sourceClone.querySelector('.source__item');

            if (itemName) itemName.textContent = item.name;
            if (itemContainer && item.id) itemContainer.setAttribute('data-source-id', item.id);

            fragment.appendChild(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.innerHTML = '';
            sourcesContainer.appendChild(fragment);
        }
    }
}

export default Sources;
