import type { NewsArticle } from '../../controller/interfaces.js';

export class News {
    public draw(data: NewsArticle[]): void {
        const news = data.length > 10 ? data.slice(0, 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement | null;

        if (!newsItemTemp) return;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
            const itemContainer = newsClone.querySelector('.news__item') as HTMLElement | null;
            const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement | null;
            const metaAuthor = newsClone.querySelector('.news__meta-author');
            const metaDate = newsClone.querySelector('.news__meta-date');
            const descriptionTitle = newsClone.querySelector('.news__description-title');
            const descriptionSource = newsClone.querySelector('.news__description-source');
            const descriptionContent = newsClone.querySelector('.news__description-content');
            const readMoreLink = newsClone.querySelector('.news__read-more a');

            if (itemContainer && idx % 2) itemContainer.classList.add('alt');

            if (metaPhoto) {
                metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            if (metaAuthor) metaAuthor.textContent = item.author || item.source.name;
            if (metaDate) metaDate.textContent = item.publishedAt.split('T')[0] || '';
            if (descriptionTitle) descriptionTitle.textContent = item.title;
            if (descriptionSource) descriptionSource.textContent = item.source.name;
            if (descriptionContent) descriptionContent.textContent = item.description;
            if (readMoreLink) readMoreLink.setAttribute('href', item.url);

            fragment.appendChild(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
