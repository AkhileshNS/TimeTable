
// External Libraries
import React, {Component} from 'react';

// Internal Libraries
import './Home.css';
import TimeTable from '../../components/TimeTable/TimeTable';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            previous: [
                ["Days|htl","8:00-8:55|h","8:55-9:50|h","9:50-10:45|h","10:45-11:15|h","11:15-12:10|h","12:10-1:05|h","1:05-2:00|h","2:00-2:55|h","2:55-3:50|htr"],
                ["Monday|h","","ML/VCS Lab","ML/VCS Lab","Snacks","SEO","CNS","","",""],
                ["Tuesday|h","","C# and .NET","SEO","Snacks","EM","CNS","Lunch","ML/VCS|p","ML/VCS|p"],
                ["Wednesday|h","","","CNS","Snacks","SNA","EM","Lunch","ML/VCS|p","C# and .NET|p"],
                ["Thursday|h","","EM","SNA","Snacks","SEO Lab","SEO Lab","","",""],
                ["Friday|h","","C# Lab","C# Lab","","","","","",""],
                ["Saturday|hbl","","CNS Lab","CNS Lab","Snacks","C# and .NET","SEO","","","|br"]
            ],
            current: [
                ["Days|htl","8:00-8:55|h","8:55-9:50|h","9:50-10:45|h","10:45-11:15|h","11:15-12:10|h","12:10-1:05|h","1:05-2:00|h","2:00-2:55|h","2:55-3:50|htr"],
                ["Monday|h","","ML/VCS Lab","ML/VCS Lab","Snacks","SEO","CNS","C# and .NET|n","",""],
                ["Tuesday|h","","C# and .NET","SEO","Snacks","EM","CNS","ML/VCS|n","ML/VCS|p","ML/VCS|p"],
                ["Wednesday|h","","ML|n","CNS","Snacks","SNA","EM","ML/VCS|n","ML/VCS|p","C# and .NET|p"],
                ["Thursday|h","","EM","SNA","Snacks","SEO Lab","SEO Lab","","",""],
                ["Friday|h","","C# Lab","C# Lab","","","","","",""],
                ["Saturday|hbl","","CNS Lab","CNS Lab","Snacks","C# and .NET","SEO","","","|br"]
            ],
            next: [
                ["Days|htl","8:00-8:55|h","8:55-9:50|h","9:50-10:45|h","10:45-11:15|h","11:15-12:10|h","12:10-1:05|h","1:05-2:00|h","2:00-2:55|h","2:55-3:50|htr"],
                ["Monday|h","","ML/VCS Lab","ML/VCS Lab","Snacks","SEO","CNS","C# and .NET|n","",""],
                ["Tuesday|h","","C# and .NET","SEO","Snacks","EM","CNS","ML/VCS|n","",""],
                ["Wednesday|h","","ML|n","CNS","Snacks","SNA","EM","ML/VCS|n","VCS|n",""],
                ["Thursday|h","","EM","SNA","Snacks","SEO Lab","SEO Lab","","",""],
                ["Friday|h","","C# Lab","C# Lab","","","","","",""],
                ["Saturday|hbl","","CNS Lab","CNS Lab","Snacks","C# and .NET","SEO","","","|br"]
            ]
        };
    }

    render() {
        return <div className="Home">
            <TimeTable previous={this.state.previous} current={this.state.current} next={this.state.next} />
        </div>;
    }
}

export default Home;