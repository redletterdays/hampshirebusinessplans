"use client";

import { useState, useEffect } from "react";
import PageIllustration from "@/components/page-illustration";

const businessNames = [
  "Entrepreneurs",
  "Bakers",
  "Photographers",
  "Fashion Designers",
  "Real Estate Agents",
  "Fitness Trainers",
  "Restaurants",
  "Tech Startups",
  "Marketing Agencies",
  "Consultants",
  "Event Planners",
  "Beauty Salons",
  "Craftsmen",
  "Law Firms",
  "Medical Practices",
  "Financial Advisors",
  "Travel Agencies",
  "Interior Designers",
  "Freelance Writers",
  "Software Developers",
  "Art Galleries",
];

export default function HeroHome() {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsFading(true);
      // After the fade-out duration, update the name and fade in
      setTimeout(() => {
        setCurrentNameIndex(
          (prevIndex) => (prevIndex + 1) % businessNames.length,
        );
        setIsFading(false);
      }, 500); // fade duration of 500ms
    }, 3000); // change name every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 flex flex-row justify-center border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <svg
                  className="box-content rounded-full border-1 border-primary bg-gray-2 fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 100 100"
                >
                  {" "}
                  <path d="m58.551 10.891c0.21094-0.80078 1.0312-1.2812 1.8281-1.0781 14.621 3.7656 26.051 15.188 29.812 29.816 0.21094 0.80078-0.28125 1.6211-1.0781 1.8281-0.12891 0.03125-0.25 0.050781-0.37891 0.050781-0.67188 0-1.2812-0.44922-1.4492-1.1289-3.4961-13.57-14.086-24.168-27.656-27.668-0.80859-0.19922-1.2891-1.0195-1.0781-1.8203zm30.559 47.66c-0.80078-0.21094-1.6211 0.28125-1.8281 1.0781-3.5 13.57-14.102 24.172-27.66 27.66-0.80078 0.21094-1.2891 1.0195-1.0781 1.8281 0.17188 0.67969 0.78125 1.1289 1.4492 1.1289 0.12109 0 0.25-0.011719 0.37891-0.050782 14.629-3.7734 26.051-15.195 29.82-29.824 0.20703-0.80078-0.26953-1.6211-1.082-1.8203zm-78.219-17.102c0.12891 0.03125 0.25 0.050781 0.37891 0.050781 0.67188 0 1.2812-0.44922 1.4492-1.1289 3.4883-13.57 14.09-24.172 27.66-27.66 0.80078-0.21094 1.2891-1.0195 1.0781-1.8281-0.21094-0.80078-1.0312-1.2891-1.8281-1.0781-14.629 3.7656-26.059 15.195-29.82 29.824-0.20703 0.80078 0.26953 1.6211 1.082 1.8203zm29.48 45.84c-13.562-3.5-24.16-14.09-27.66-27.66-0.21094-0.80078-1.0312-1.2891-1.8281-1.0781-0.80078 0.21094-1.2891 1.0195-1.0781 1.8281 3.7734 14.621 15.195 26.051 29.824 29.812 0.12891 0.03125 0.25 0.050782 0.37891 0.050782 0.67188 0 1.2812-0.44922 1.4492-1.1289 0.20312-0.80469-0.27734-1.625-1.0859-1.8242zm51.129-37.289c0 0.69141-0.46875 1.2891-1.1406 1.4609l-24.52 6.1289 7.4688 13.699c0.32031 0.57813 0.21094 1.3086-0.26172 1.7812-0.28906 0.28906-0.67188 0.44141-1.0586 0.44141-0.25 0-0.48828-0.058594-0.71875-0.17969l-13.699-7.4688-6.1289 24.52c-0.17188 0.67188-0.76953 1.1406-1.4609 1.1406-0.69141 0-1.2891-0.46875-1.4609-1.1406l-6.1289-24.52-13.699 7.4688c-0.23047 0.12109-0.46875 0.17969-0.71875 0.17969-0.39062 0-0.76953-0.14844-1.0586-0.44141-0.46875-0.46875-0.57812-1.1914-0.26172-1.7812l7.4688-13.699-24.48-6.1289c-0.67188-0.17188-1.1406-0.76953-1.1406-1.4609s0.46875-1.2891 1.1406-1.4609l24.238-6.0586-9.1797-15.719c-0.33984-0.58984-0.25-1.3281 0.23828-1.8203 0.48047-0.48047 1.2305-0.57812 1.8203-0.23047l15.73 9.1797 6.0586-24.238c0.16406-0.68359 0.76172-1.1523 1.4531-1.1523s1.2891 0.46875 1.4609 1.1406l6.1289 24.52 13.699-7.4688c0.57813-0.32031 1.3086-0.21094 1.7812 0.26172 0.46875 0.46875 0.57813 1.1914 0.26172 1.7812l-7.4688 13.699 24.52 6.1289c0.64844 0.14844 1.1172 0.74609 1.1172 1.4375zm-33.16-12.84 0.89844 3.6016 3.6016 0.89844 5.3984-9.8984zm-14.68 4.3789 6.3398 6.3398 6.3398-6.3398-6.3398-25.359zm-6.75 0.19141 3.8516-0.96094 0.96094-3.8516-11.559-6.7383zm-20.73 8.2695 25.359 6.3398 6.3398-6.3398-6.3398-6.3398zm25.48 12.84-0.89844-3.6016-3.6016-0.89844-5.3984 9.8984zm14.68-4.3789-6.3398-6.3398-6.3398 6.3398 6.3398 25.348zm6.5-0.12109-3.6016 0.89844-0.89844 3.6016 9.8984 5.3984zm20.98-8.3398-20.578-5.1406h-0.011719l-4.7695-1.1914-6.3398 6.332 6.3398 6.3398z" />
                </svg>
              </div>
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <svg
                  className="box-content rounded-full border-1 border-primary bg-gray-2 fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 100 100"
                >
                  <path d="m84.164 9.9922c-0.43359-0.29688-0.98828-0.35547-1.4766-0.16406l-21.598 8.543-21.598-8.543-0.015626-0.003906c-0.24609-0.074219-0.5-0.10938-0.75781-0.09375-0.054688 0.011719-0.10938 0.023437-0.16016 0.039062-0.074219 0.011719-0.14453 0.03125-0.21484 0.054688l-0.015625 0.003906-22.184 8.7734c-0.60547 0.23828-1 0.82422-1 1.4727v68.621c-0.003906 0.52734 0.25781 1.0195 0.69141 1.3125 0.4375 0.29688 0.98828 0.35938 1.4766 0.16406l21.598-8.543 21.598 8.543c0.027344 0.011719 0.054688 0.015625 0.078126 0.023437 0.03125 0.011719 0.0625 0.019532 0.09375 0.027344 0.26953 0.082032 0.55469 0.082032 0.82031 0 0.03125-0.007812 0.0625-0.015625 0.09375-0.027344 0.027344-0.007812 0.054688-0.011718 0.078125-0.023437l22.184-8.7734c0.60547-0.23828 1-0.82422 1-1.4727v-68.621c0-0.52734-0.25781-1.0156-0.69141-1.3125zm-65.848 11.16 19.008-7.5156v48.754c-0.59766 0.94531-1.4453 1.7031-2.4492 2.1914-0.60938 0.25391-0.89453 0.94922-0.64062 1.5547s0.94922 0.89453 1.5547 0.64062c0.55078-0.23438 1.0664-0.54688 1.5352-0.92188v12.992l-19.008 7.5156zm22.18 36.398v0.003907c0.28125 0.29687 0.69922 0.42578 1.1016 0.34375 0.39844-0.082032 0.73047-0.36719 0.87109-0.75391 0.61328-1.668 1.2109-3.4844 1.7852-5.2422l-1.1172-0.41406-1.1445-0.32812c-0.50781 1.5469-0.99219 3.0078-1.4961 4.418v-41.941l19.008 7.5156v7.5391c-0.30469 0.11328-0.60547 0.22266-0.91016 0.35156v0.003906c-0.60547 0.25391-0.88672 0.94531-0.63672 1.5508 0.25 0.60156 0.94141 0.89062 1.5469 0.64453v44.93c-0.35938 0.027344-0.72266 0.050781-1.082 0.050781-0.64844 0.019532-1.1602 0.55078-1.1562 1.1953 0 0.64453 0.51953 1.1719 1.1641 1.1836h0.011718c0.35547-0.003906 0.71094-0.027343 1.0625-0.050781v7.8125l-19.008-7.5156zm41.188 21.297-19.008 7.5156v-8.2891c0.52734-0.12891 1.0508-0.27344 1.5664-0.44922 0.30859-0.09375 0.56641-0.30859 0.71094-0.59375 0.14844-0.28906 0.17188-0.62109 0.070313-0.92578-0.10547-0.30469-0.32422-0.55469-0.61719-0.69141-0.28906-0.14062-0.625-0.15625-0.92578-0.042968-0.26562 0.089844-0.53516 0.16016-0.80469 0.23828v-24.066l1.0625-0.91797c0.85156-0.73438 1.6797-1.4453 2.4727-2.1406v0.003906c0.49219-0.43359 0.54297-1.1875 0.10937-1.6797-0.43359-0.49609-1.1836-0.54297-1.6797-0.10938-0.63281 0.55469-1.293 1.125-1.9648 1.7031v-18.168c0.58984-0.12891 1.1914-0.21094 1.793-0.25391 0.65625-0.035157 1.1562-0.59766 1.1172-1.2539-0.046876-0.64844-0.60156-1.1445-1.2539-1.1211-0.55469 0.035156-1.1094 0.10547-1.6562 0.20312v-6.6562l19.008-7.5156z" />
                  <path d="m72.18 70.352c1.7734 0 6.332-7.0117 6.332-9.7461v0.003906c0-3.4961-2.8359-6.332-6.332-6.332-3.4961 0-6.332 2.8359-6.332 6.332 0.003906 2.9648 4.7148 9.7422 6.332 9.7422zm0-13.695c2.1836 0.003906 3.9492 1.7695 3.9531 3.9531 0 1.8086-2.6523 5.5312-3.9414 6.9727-1.2969-1.4648-3.9609-5.207-3.9609-6.9727 0-2.1836 1.7695-3.9492 3.9492-3.9531z" />
                  <path d="m69.961 71.355c-0.58203 0.60547-1.2188 1.1562-1.9062 1.6445-0.26563 0.17969-0.44141 0.46094-0.49609 0.77734-0.054688 0.31641 0.023437 0.64062 0.21094 0.89844 0.1875 0.26172 0.47266 0.43359 0.78906 0.47656 0.32031 0.046875 0.64062-0.035156 0.89453-0.23047 0.82812-0.58594 1.5938-1.25 2.2852-1.9883 0.41797-0.49219 0.36328-1.2305-0.11719-1.6562-0.48438-0.42969-1.2227-0.39453-1.6602 0.078125z" />
                  <path d="m53.43 75.402c-1.5312-0.53516-2.8789-1.4961-3.8867-2.7734-0.17969-0.26562-0.46094-0.44531-0.77734-0.50391-0.31641-0.054688-0.64062 0.019531-0.90234 0.20703s-0.43359 0.47656-0.48047 0.79297c-0.046874 0.31641 0.035157 0.64062 0.23047 0.89453 1.2773 1.6523 3 2.9062 4.9648 3.6055 0.61328 0.23047 1.2969-0.078125 1.5312-0.6875 0.23438-0.61328-0.070313-1.2969-0.67969-1.5352z" />
                  <path d="m69.473 45.012c0.32031 0 0.62891-0.12891 0.85156-0.35938 1.418-1.3633 2.6211-2.9336 3.5703-4.6562 0.15625-0.28125 0.1875-0.61328 0.09375-0.92188-0.09375-0.30469-0.30859-0.5625-0.59375-0.70703-0.28906-0.14844-0.62109-0.17188-0.92578-0.070313-0.30469 0.10547-0.55469 0.32812-0.69141 0.61719-0.84766 1.5039-1.9102 2.8789-3.1562 4.0742-0.33203 0.34375-0.42969 0.85547-0.24219 1.293 0.18359 0.44141 0.61719 0.73047 1.0938 0.73047z" />
                  <path d="m26.125 55.594c-0.070312-0.73047-0.10938-1.5117-0.10547-2.3164 0-0.94531 0.050781-1.9492 0.14844-2.9805l-0.003907 0.003906c0.046876-0.64453-0.42969-1.207-1.0742-1.2695-0.64062-0.0625-1.2188 0.40234-1.293 1.043-0.10547 1.1055-0.16016 2.1836-0.16016 3.2031 0 0.88281 0.039062 1.7383 0.11719 2.5469l0.003906 0.003906c0.058594 0.60938 0.57031 1.0703 1.1797 1.0742 0.039062 0 0.078125 0 0.11719-0.003906l0.003906-0.003907c0.65234-0.0625 1.1289-0.64453 1.0664-1.3008z" />
                  <path d="m47.609 40.086c-0.58594-0.29297-1.3047-0.058594-1.5977 0.52734-0.83984 1.6953-1.5781 3.4414-2.2109 5.2266-0.21484 0.61328 0.10547 1.2852 0.71484 1.5078 0.61328 0.22266 1.2891-0.085937 1.5195-0.69141 0.60156-1.6953 1.3047-3.3555 2.0977-4.9688 0.29688-0.58984 0.0625-1.3047-0.52344-1.6016z" />
                  <path d="m30.629 63.98c-1.4023-0.80078-2.5273-2.0156-3.2188-3.4766-0.29688-0.57812-1.0039-0.80859-1.5859-0.52344-0.58203 0.28906-0.82422 0.99219-0.54688 1.5781 0.90234 1.8945 2.3633 3.4648 4.1914 4.4961 0.57422 0.32031 1.2969 0.11719 1.6172-0.45703 0.32031-0.57422 0.11719-1.2969-0.45703-1.6172z" />
                  <path d="m50.168 37.781c0.32812 0 0.63672-0.13281 0.86328-0.37109 1.2188-1.2891 2.5508-2.4727 3.9766-3.5312 0.51172-0.39844 0.61328-1.1289 0.22656-1.6523-0.38281-0.51953-1.1133-0.63672-1.6445-0.26172-1.5352 1.1445-2.9648 2.418-4.2812 3.8047-0.32812 0.34375-0.42188 0.85156-0.23438 1.2891s0.61719 0.72266 1.0938 0.72266z" />
                  <path d="m69.117 30.984c1.3672 0.83594 2.4141 2.1016 2.9805 3.5977 0.25391 0.59766 0.94141 0.88281 1.543 0.63672s0.89453-0.92969 0.66016-1.5352c-0.75781-1.9805-2.1562-3.6523-3.9727-4.7461-0.26953-0.16797-0.59766-0.22266-0.91016-0.14453-0.3125 0.074219-0.57812 0.27344-0.74219 0.54688-0.16406 0.27734-0.20703 0.60547-0.125 0.91797 0.082031 0.30859 0.28906 0.57031 0.56641 0.72656z" />
                  <path d="m57.98 54.082c-0.44531-0.48047-1.1953-0.51172-1.6797-0.066406-1.3828 1.2773-2.6133 2.4688-3.7578 3.6406l-0.25781 0.26953c-0.22656 0.22656-0.35547 0.53516-0.35547 0.85547 0.003906 0.32031 0.13672 0.62891 0.36719 0.85156 0.23438 0.22266 0.54297 0.33984 0.86719 0.33203 0.32031-0.011719 0.62109-0.15234 0.83984-0.39062l0.24219-0.25391c1.1172-1.1445 2.3164-2.3086 3.668-3.5586v0.003906c0.23438-0.21484 0.37109-0.51172 0.38281-0.82812s-0.10156-0.62109-0.31641-0.85547z" />
                  <path d="m48.641 68.277c0.35547-1.6484 1.0391-3.2109 2.0078-4.5898 0.18359-0.26562 0.25391-0.58984 0.19141-0.90625-0.058594-0.31641-0.24609-0.59375-0.51172-0.76953-0.26953-0.17578-0.59766-0.23828-0.91016-0.16797-0.3125 0.066406-0.58594 0.26172-0.75781 0.53516-1.1484 1.6484-1.9531 3.5156-2.3633 5.4844-0.11328 0.64453 0.31641 1.2617 0.96484 1.3789 0.066406 0.011718 0.13672 0.015624 0.20703 0.015624 0.57812 0 1.0703-0.41406 1.1719-0.98047z" />
                  <path d="m25.625 45.801c0.085938 0.019531 0.17578 0.03125 0.26562 0.03125 0.55469 0 1.0352-0.38281 1.1602-0.92578 0.35938-1.5703 0.67969-2.5742 0.68359-2.5859l-0.003906 0.003907c0.18359-0.62109-0.16016-1.2734-0.77734-1.4688-0.61328-0.19922-1.2734 0.13281-1.4883 0.74219-0.015625 0.042969-0.35156 1.1055-0.73438 2.7773-0.14844 0.64062 0.25391 1.2812 0.89453 1.4258z" />
                  <path d="m30.023 27.438-3.3516 3.3594-2.8594-3.3281c-0.43359-0.48047-1.1719-0.52734-1.6602-0.10547-0.49219 0.42188-0.55469 1.1562-0.14453 1.6562l2.9805 3.4688-3.3203 3.3281-0.003907 0.003906c-0.22266 0.22266-0.34766 0.52344-0.34766 0.83984s0.12891 0.61719 0.35156 0.83984c0.46484 0.46484 1.2188 0.46484 1.6836 0l3.1914-3.1992 2.7891 3.2461h-0.003906c0.43359 0.48047 1.1719 0.52734 1.6602 0.10547 0.49219-0.42188 0.55469-1.1562 0.14453-1.6562l-2.9062-3.3867 3.4805-3.4883c0.22656-0.22266 0.35938-0.52734 0.35938-0.84766 0.003906-0.31641-0.12109-0.625-0.34766-0.85156-0.22656-0.22266-0.53125-0.34766-0.85156-0.34375-0.32031 0-0.625 0.13281-0.84375 0.35938z" />{" "}
                </svg>
              </div>
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <svg
                  className="box-content rounded-full border-1 border-primary bg-gray-2 fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 100 100"
                >
                  <path d="m76.965 34.305h5.5352c2.3516-0.007813 4.2539-1.9102 4.2656-4.2617v-4.5273c-0.011719-2.3516-1.9141-4.2539-4.2656-4.2617h-5.5352zm-46.363 1.5352c0.44531-0.27734 0.92969-0.48438 1.4336-0.61719l-5.0586-4.9297 2.2773 6.6836h0.003906c0.38281-0.44531 0.83594-0.83203 1.3438-1.1367zm5.1758-0.3125h-0.003906c1.4844 0.67578 2.5938 1.9609 3.0469 3.5273v-2.4609c-3.1602-0.58594-5.4531-3.3398-5.4609-6.5508v-4.5273c0.003906-2.7461 1.6953-5.2109 4.2539-6.207-0.96875-0.1875-1.9492-0.30469-2.9336-0.35938v0.64062c0 0.66406-0.53906 1.1992-1.1992 1.1992-0.66406 0-1.2031-0.53516-1.2031-1.1992v-0.64062c-4.9141 0.26562-9.5898 2.2031-13.254 5.4922l0.44922 0.44922h0.003906c0.41406 0.47656 0.38672 1.1914-0.058593 1.6367-0.44531 0.44531-1.1602 0.46875-1.6367 0.058594l-0.44922-0.44922v-0.003907c-3.2891 3.6641-5.2266 8.3398-5.4922 13.254h0.63672c0.66406 0 1.1992 0.53906 1.1992 1.2031 0 0.66016-0.53516 1.1992-1.1992 1.1992h-0.63672c0.26562 4.9141 2.2031 9.5898 5.4922 13.254l0.44922-0.44922c0.47656-0.41406 1.1914-0.39062 1.6367 0.054688 0.44531 0.44531 0.47266 1.1602 0.058593 1.6367l-0.44922 0.44922h-0.003906c2.4375 2.1875 5.3398 3.793 8.4883 4.6914v-2.3477c0.003906-2.5586 2.0781-4.6289 4.6367-4.6367h6.668v-1.3672l-7.6406-7.4297h0.003907c-0.95313-0.43359-1.7656-1.125-2.3398-2-0.042969-0.054687-0.082032-0.11719-0.11719-0.17969-0.54297-0.89453-0.82031-1.9219-0.79688-2.9688l-4.8242-14.148c-0.17578-0.53516 0.042969-1.1133 0.52344-1.4023 0.48047-0.28516 1.0977-0.20312 1.4844 0.19922zm1.9297 8.6641h-0.003906c-0.72656 0.85547-1.6953 1.4688-2.7812 1.7578l3.8984 3.793v-2.2812zm-3.5312-6.6914c-1.0352-0.23047-2.1133 0.066406-2.8789 0.79688-0.76562 0.72656-1.1172 1.7891-0.9375 2.832 0.18359 1.043 0.87109 1.9258 1.8398 2.3516 0.96484 0.42969 2.082 0.34766 2.9766-0.21875 1.0781-0.6875 1.6367-1.9531 1.418-3.2148-0.21875-1.2578-1.1719-2.2656-2.418-2.5469zm-6.6602 30.934c-8.5859-1.8281-15.848-7.5195-19.684-15.418-3.832-7.8984-3.8086-17.121 0.0625-25 3.8711-7.8789 11.16-13.531 19.758-15.32 8.5938-1.793 17.535 0.48438 24.23 6.1641h30.617c3.6719 0.007813 6.6484 2.9844 6.6602 6.6562v4.5273c-0.007812 3.2109-2.3008 5.9648-5.4609 6.5508v17.848h6.668c2.5586 0.007813 4.6289 2.082 4.6328 4.6367v18.25c-0.007812 3.1641-2.5664 5.7227-5.7266 5.7305h-1.7617v1.3359-0.003906c-0.007813 1.9375-1.5781 3.5039-3.5117 3.5039h-45.488c-1.9375 0-3.5078-1.5664-3.5117-3.5039v-1.332h-1.7578c-3.1602-0.007813-5.7188-2.5664-5.7266-5.7305zm20.41-49.574c-6.4375-4.2773-14.438-5.4766-21.844-3.2852-7.4062 2.1953-13.461 7.5586-16.531 14.648-3.0703 7.0898-2.8398 15.176 0.625 22.078 3.4688 6.9062 9.8203 11.914 17.34 13.684v-2.0859c-6.5742-1.6836-12.129-6.0664-15.301-12.066-3.168-6-3.6602-13.059-1.3477-19.438 2.3125-6.3828 7.207-11.488 13.484-14.066 6.2773-2.5781 13.352-2.3867 19.48 0.53125zm21.273 21.32h0.60156v-3.4805h-17.086v3.4766h0.60156v0.003907c0.66406 0 1.1992 0.53516 1.1992 1.1992v3.8945c0 0.66016-0.53516 1.1992-1.1992 1.1992h-0.60156v0.72266c1.5352 0.42969 3.125 0.625 4.7188 0.58203v-2.1758c0-0.66406 0.53906-1.2031 1.2031-1.2031h5.2461c0.66406 0 1.1992 0.53906 1.1992 1.2031v2.1797-0.003906c1.5938 0.042968 3.1836-0.15234 4.7188-0.58203v-0.72266h-0.60156 0.003906c-0.32031 0-0.625-0.125-0.85156-0.34766-0.22656-0.22656-0.35156-0.53516-0.34766-0.85156v-3.8945c-0.003906-0.32031 0.12109-0.625 0.34766-0.85156 0.22656-0.22656 0.53125-0.35156 0.85156-0.35156zm3 0h2.3828v-18.926h-2.3867zm4.7734 0c0.63281 0 1.2656-0.082032 1.6523 0.61719 0.85156-1.2656 1.5156-2.6445 1.9766-4.0977h-3.6367zm1.8047 4.2422v0.84766c0 0.66406-0.53906 1.2031-1.1992 1.2031h-0.60547v6.4688h-0.003906c0.003906 0.29297-0.10547 0.57422-0.29688 0.78906l-2.3086 3.0117c-0.22656 0.29297-0.57422 0.46094-0.94531 0.46484-0.36719 0.003907-0.71484-0.16406-0.94922-0.44922l-2.4141-3.0742c-0.16406-0.21094-0.25391-0.47266-0.25-0.74219v-3.2812c-1.5469 0.375-3.1328 0.54688-4.7188 0.51172v2.1836-0.003907c0 0.66406-0.53906 1.1992-1.2031 1.1992h-5.25c-0.66406 0-1.1992-0.53516-1.1992-1.1992v-2.1797c-1.5898 0.035156-3.1758-0.13672-4.7188-0.51172v3.2773c0 0.29297-0.10547 0.57422-0.30078 0.79297l-2.3086 3.0117c-0.22656 0.28906-0.57422 0.46094-0.94141 0.46484-0.37109 0-0.71875-0.16406-0.94922-0.44922l-2.4141-3.0781c-0.16406-0.21094-0.25391-0.47266-0.25391-0.74219h-0.003906v-6.4688h-0.60156c-0.66016 0-1.1992-0.53516-1.1992-1.1992v-0.84766c-0.97266-1.0352-1.8203-2.1758-2.5312-3.4023v20.84c0 0.12109-0.003907 0.26562-0.019532 0.43359v-0.003907c0.015625 0.074219 0.023438 0.15234 0.027344 0.23047 0 0.17969-0.042969 0.35547-0.125 0.51562-0.078125 0.50391-0.19922 0.99609-0.35156 1.4805-0.19141 0.77344-0.64844 1.4531-1.293 1.9219-1.2305 0.96484-1.9805 2.418-2.0508 3.9805v13.973c0.003906 0.61328 0.5 1.1094 1.1133 1.1133h45.488c0.61328-0.003906 1.1055-0.5 1.1094-1.1133v-13.973c-0.070313-1.5625-0.82031-3.0156-2.0508-3.9805-0.64453-0.46875-1.1016-1.1484-1.2891-1.9219-0.15625-0.48438-0.27344-0.97656-0.35547-1.4805-0.078124-0.16016-0.12109-0.33594-0.12109-0.51562 0-0.078125 0.007812-0.15625 0.023437-0.23047-0.015625-0.16406-0.023437-0.30859-0.023437-0.43359v-20.832c-0.70703 1.2266-1.5547 2.3672-2.5273 3.3984zm-4.1992 2.0469h-2.3828v6.0586l1.2031 1.543 1.1719-1.5312zm1.8008-3.8945h-5.9844v1.5h5.9805zm-31.434-2.3984h0.60156l-0.003906-3.4766h-3.6289c0.45703 1.457 1.125 2.8359 1.9805 4.1016 0.21094-0.38281 0.60938-0.61719 1.0469-0.61719zm3 0h2.375v-18.922h-2.3828zm2.3828 6.2891h-2.3906v6.0586l1.207 1.543 1.1758-1.5312zm1.8008-3.8945h-5.9883v1.5h5.9805zm17.672-21.316h-17.086v13.051h17.086zm-24.254 0h-5.5273c-2.3516 0.007813-4.2539 1.9102-4.2656 4.2617v4.5273c0.011719 2.3516 1.9141 4.2539 4.2656 4.2617h5.5234zm-6.7266 35.586h-6.668c-1.2344 0.003906-2.2383 1.0039-2.2422 2.2383v2.2422h8.9102zm-0.33594 6.8789-8.5742-0.003906v13.613c0.003906 1.8398 1.4961 3.3281 3.332 3.332h1.7578v-10.242c0.074219-2.418 1.2812-4.6641 3.2578-6.0625zm54.117-2.3984v-2.2422c-0.003906-1.2344-1.0078-2.2344-2.2422-2.2383h-6.668v4.4805zm-5.0898 19.34h1.7617-0.003907c1.8398-0.003906 3.3242-1.4922 3.332-3.332v-13.613h-8.5781l0.22656 0.64062h-0.003906c1.9805 1.3984 3.1875 3.6445 3.2617 6.0625zm-24.828-33.867h-2.8516v4.3594h2.8516zm-15 12.266h27.141c0.66016 0 1.1992 0.53906 1.1992 1.2031v7.6523c0 0.32031-0.12891 0.625-0.35547 0.85156-0.22656 0.22656-0.53516 0.35156-0.85547 0.34766v11.641c0 0.66406-0.53906 1.1992-1.2031 1.1992h-24.711c-0.66016 0-1.1992-0.53516-1.1992-1.1992v-11.645c-0.32031 0.003906-0.62891-0.12109-0.85547-0.34766-0.22656-0.22656-0.35547-0.53125-0.35547-0.85156v-7.6523c0-0.66406 0.53516-1.1992 1.1992-1.1992zm24.73 10.051h-22.312v10.445h22.32zm1.2109-7.6523h-24.742v5.2578h24.746z" />
                </svg>
              </div>
              <div className="-mx-0.5 flex justify-center -space-x-3"></div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Tailored Business Plans
              <br /> for Hampshire
              <br />
              <span
                className={`transition-opacity duration-500 ease-in-out ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
              >
                {businessNames[currentNameIndex]}
              </span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 font-open-sans text-lg text-gray-800"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Wanting to start a business but you're unsure how to begin with
                your business plan?
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-primary to-secondary bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://tidycal.com/horizon/hampshire-business-plan-initial-consultation"
                  >
                    <span className="relative inline-flex items-center">
                      Get Started Now{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={500}
          >
            <div className="bg- relative aspect-video rounded-3xl px-5 py-3 before:pointer-events-none before:absolute before:-inset-0">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] after:w-[41px]">
                <span className="text-[16px] font-semibold text-primary">
                  Creating Your Business Plan
                </span>
              </div>
              <div className="font-open-sans text-lg font-semibold text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-800">
                  Writing Your Business Plan
                </span>{" "}
                <br />
                <br />
                <span className="animate-[code-2_10s_infinite] text-gray-800">
                  Creating Your Financial Forecast Model
                </span>
                <br />
                <br />
                <span className="animate-[code-3_10s_infinite] text-gray-800">
                  Personalised Step by Step Guide To Moving Forward with Your
                  Business Plan
                </span>{" "}
                <br />
                <br />
                <span className="animate-[code-4_10s_infinite] text-gray-800">
                  Research Review Meeting
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-800">
                  Designing Your Primary Research Questions
                </span>
                <br />
                <br />
                <span className="animate-[code-6_10s_infinite] text-gray-800">
                  Designing Your Secondary Research Questions
                </span>
                <br />
                <br />
                <span className="animate-[code-7_10s_infinite] text-gray-800">
                  Strategic Meeting to Provide Recommendations for Your Business
                  Plan & Financial Forecast Model
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
