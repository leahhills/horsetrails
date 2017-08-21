function HorseTrailRepository() {
    function getTrailList() {
        return [
            {
                id: 1,
                name:"Red Brook Shore",
                description:"Easy",
                location:"Wasagee Coast National Park"
            },
            {
                id: 2,
                name:"Plain Meadows",
                description:"Medium",
                location:"Antelope Island"
                
            },
            {
                id: 3,
                name: "Thomas Shore",
                description: "Hard",
                location: "Mt Rainier, Washington"
            },
            {
                id: 4,
                name: "Lake View Green by Cherry Meadows",
                description: "Medium",
                location: "Wichita, Oregon" 
            },
            {
                id: 5,
                name: "Marred Stone Hill",
                description: "Easy",
                location: "Mount Soon Nebraska"
            },
            {
                id: 6,
                name: "Laramie Downs",
                description: "Very Hard",
                location: "Melbrook, Kentucky"
            },
            {
                id: 7,
                name: "Mason Plains",
                description: "Medium",
                location: "Yimichutak, Virginia"
            }
        ];
    }

    return {
        getTrailList: getTrailList
    }
}
export default HorseTrailRepository;