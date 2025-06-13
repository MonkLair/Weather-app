import type { INews } from '../models/INewsModels'

interface NewsProps {
    newsInfo: INews
}

export default function News({ newsInfo }: NewsProps) {
    const imgUrl = newsInfo.media[0]["media-metadata"][1].url

    return (
        <>

            <div className="news-item">
                <a target="_blank" href={newsInfo.url}>
                    <img className='news-img' src={imgUrl} alt="" />
                    <div className="news-text">
                        <span className="news-title">{newsInfo.title}</span>
                        <span className="news-abstract">{newsInfo.abstract}</span>
                        <span className="news-byline">{newsInfo.byline}</span>
                    </div>
                </a>
            </div>
        </>
    )
}
