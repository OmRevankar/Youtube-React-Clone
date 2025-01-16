export const API_KEY = "AIzaSyBJrg70UqG2IZy0lkoH-yapiT0hDIfIE-g"

export function calculateViews(views){

    if(views > 1000000)
    {
        let a = (views/1000000);
        return `${Math.round(a*10)/10}M`;
    }
    else if (views > 1000)
    {
        return `${Math.round(views/1000)}K`;
    }
    else
    {
        return views;
    }

}