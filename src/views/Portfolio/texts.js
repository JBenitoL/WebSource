export default {
    data() {
        return {
            goToRepository: 'Go to repository',
            coronabot1: 'This has been my first project post-PhD. Quarantine started and I decided to make a Telegram bot to visualize Coronavirus data in Spain from a reliable source (Instituto Carlos III provided by',
            coronabotLink: 'Datadista',
            coronabot: [
                'With keywords by the user, a graph is returned with data from Spain. We can compare different regions of Spain using accumulated/daily and total/per million data for infected/deceased cases. Furthermore, we can obtain the top 10 best/worst regions for the different scenarios.',
                'My function is uploaded to AWS and redirects to the Telegram API. I use different python libraries as: Pandas, Matplotlib or Requests. I also use S3 to save some info for analytics.'
            ],
            web: [
                'By applying to different jobs I realized that a personal webpage could showcase my skills and projects. Furthermore, it is a good project in itself!',
                'My goals were to develop a clean and simple website, but containing all my profesional info. It was also very important, to make a very responsive site for different browsers and screens.',
                'It is developed using vue and quasar and it helped me to increase my knowledge in html/javascript/css. Also I use AWS lambda to send and receive emails in the contact page as a back-end.'
            ],
            biciMad: [
                'I live in Madrid and I really enjoy moving around by bike. BiciMad is a public company of electric bicycle sharing system. As the data is also public, a friend and I decided to analyze it.',
                'Most used routes, bikes distribution throughout the stations with a comparation at different days or hours are some of the ideas we are working on.',
                'At this point, from the json file, we are able to clean and transform the data to a pandas dataframe to make the first analysis.'
            ],
            scientificSW: [
                `This was a very important part of my thesis. It is a colaborative project, that is still growing. We needed a fast and eficient way to open and analyze data from the microscope in order to improve the experiment's next steps. Using this software we are able to make a fast visualization and analysis of images.`,
                'Written in MATLAB, is designed as a modular program with interchangeable functions. Using as input binary files from the microscope, we transform them into images of different energies. There are several parameters that can be changed to get the most optimized results.',
                'With images we can perform: fast-fourier transformations, filters, averages of regions, pattern recognition and much more.'
            ]

        }
    }
}
