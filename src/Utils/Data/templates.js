// importing the  images of templates

import template_1 from "../Images/sample_1.jpg";
import template_2 from "../Images/sample_2.jpg";
import template_3 from "../Images/sample_3.jpg";
import template_4 from "../Images/sample_4.jpg";
import template_5 from "../Images/sample_5.jpg";
import template_7 from "../Images/sample_9.png";


// importing all the templates 

import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";
import Template5 from "../Templates/Template5";
import Template6 from "../Templates/Template6";
import Template7 from "../Templates/Template7";
import Template8 from "../Templates/Template8";



//templates are  exported to process further
export const templates = [
    {
        id: 1,
        template_name: "Template-1",
        template_img: template_1,
        template: <Template1 />,
    },
    {
        id: 2,
        template_name: "Template-2",
        template_img: template_2,
        template: <Template2 />,
    },
    {
        id: 3,
        template_name: "Template-3",
        template_img: template_3,
        template: <Template3 />,
    },
    {
        id: 4,
        template_name: "Template-4",
        template_img: template_4,
        template: <Template4 />,
    },
    {
        id: 5,
        template_name: "Template-5",
        template_img: template_5,
        template: <Template5 />,
    },
    {
        id: 6,
        template_name: "Template-6",
        template_img: template_3,
        template: <Template6 />,
    },
    {
        id: 7,
        template_name: "Template-7",
        template_img: template_7,
        template: <Template7 />,
    },
    {
        id: 8,
        template_name: "Template-8",
        template_img: template_5,
        template: <Template8 />,
    },

];
