import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";


const Catagory = () => {
    const catagoryNews = useLoaderData();

    return (
        <div>
            <p className="text-center fw-bold text-warning">Total news: {catagoryNews.length}</p>
            {
                catagoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Catagory;