const Job = require("../../Models/JobModel");

const StatMainPage = async (req, res) => {
    const id = req.body.id;
    if (!id) {
        res.status(440).json({ message: "No id found" })
    }



    const findTotallJobs = await Job.find({ org_id: id });

    //Totall jobs posted
    const totallJobsPosted = findTotallJobs.length;

    // Counting totall number of candidates applied till now
    const applicantsCount = findTotallJobs.map((job) => job.applicants_no);
    const totallApplicants = applicantsCount.reduce((a, b) => a + b, 0)


    // Getting the applied , rejected , hired stats

    const reportForJobStats = findTotallJobs.map((job) => job.report_status);


    // Initialize the sum variables
    var hiredSum = 0;
    var appliedSum = 0;

    // Loop through the array
    for (var i = 0; i < reportForJobStats.length; i++) {
        // Access the object at index i
        var obj = reportForJobStats[i];

        // Extract the values for 'hired' and 'applied' keys
        var hiredValue = obj.hired;
        var appliedValue = obj.applied;

        // Add the values to the sum variables
        hiredSum += hiredValue;
        appliedSum += appliedValue;
    }


    // Output the sum values
    // console.log("Sum of 'hired' key values:", hiredSum);
    // console.log("Sum of 'applied' key values:", appliedSum);


    // *************************************************
    //     NOW EXTRACTING EDUCATIONAL QUALIFICATION
    // *************************************************

    const reportForEducationalStatus = findTotallJobs.map((job) => job.report_educational_level);


    // const array = [[], ['Ph.D', 'Ph.D', 'BS', 'BS']];

    // Flatten the array
    const flattenedArray = reportForEducationalStatus.flat();

    // Count the occurrences of each value
    const countMap = flattenedArray.reduce((acc, value) => {
        if (acc[value]) {
            acc[value] += 1;
        } else {
            acc[value] = 1;
        }
        return acc;
    }, {});

    // Log the counts
    // console.log('Number of occurrences for each value:');
    // console.log(countMap);


    // *************************************************
    //     NOW EXTRACTING CITIES OF APPLICANTS
    // *************************************************


    const reportForCities = findTotallJobs.map((job) => job.report_city);

    // Flatten the array
    const flattenedArray2 = reportForCities.flat();

    // Create an object to store unique values and their counts
    const citiesList = {};

    // Count the occurrences of each value
    flattenedArray2.forEach(value => {
        if (citiesList[value]) {
            citiesList[value] += 1;
        } else {
            citiesList[value] = 1;
        }
    });

    // Log the unique values and their counts
    // for (const value in citiesList) {
    //     console.log(`${value}: ${citiesList[value]}`);
    // }



    // *************************************************
    //     NOW EXTRACTING UNIVERSITIES LIST OF APPLICANTS
    // *************************************************


    const reportForUniversities = findTotallJobs.map((job) => job.report_university);

    // Flatten the array
    const flattenedArray3 = reportForUniversities.flat();

    // Create an object to store unique values and their counts
    const UniversitiesList = {};

    // Count the occurrences of each value
    flattenedArray3.forEach(value => {
        if (UniversitiesList[value]) {
            UniversitiesList[value] += 1;
        } else {
            UniversitiesList[value] = 1;
        }
    });

    // Log the unique values and their counts
    // for (const value in UniversitiesList) {
    //     console.log(`${value}: ${UniversitiesList[value]}`);
    // }


    // *************************************************
    //     NOW EXTRACTING APPLICANTS MALE VS FEMALE RATIO %
    // *************************************************

    const reportForMaleVSFemale = findTotallJobs.map((job) => job.report_male_vs_female);


    const GenderRatio = reportForMaleVSFemale.reduce((accumulator, currentValue) => {
        return {
            male: accumulator.male + currentValue.male,
            female: accumulator.female + currentValue.female
        };
    }, { male: 0, female: 0 });


    const total = GenderRatio.male + GenderRatio.female;

    const malePercentage = (GenderRatio.male / total) * 100;
    const femalePercentage = (GenderRatio.female / total) * 100;
    const GenderPercentage = {
        Male: malePercentage,
        Female: femalePercentage
    }


    res.send({ hiredSum, appliedSum, totallApplicants, totallJobsPosted, countMap, citiesList, UniversitiesList, GenderPercentage })

}

module.exports = StatMainPage;