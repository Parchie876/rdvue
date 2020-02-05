import chalk from 'chalk';
import gitUserName from 'git-user-name';
import path from 'path';
const TEMPLATE_PROJECT_URL = `https://${gitUserName()}@bitbucket.org/realdecoyteam/rd-vue-cli.git`;
const CLI_PROJECT_ROOT = __dirname;
const TEMPLATE_ROOT = path.join(CLI_PROJECT_ROOT, '/../../template');
function USAGE_TEMPLATE(service = 'rdvue', action = '<action>', feature = '<feature>', featureName = '<feature name>', options = '[options]') {
    return [
        {
            header: 'Usage:',
            content: `$ ${chalk.yellow(service)} ${chalk.green(action)} ${chalk.magenta(feature)} ${chalk.grey(featureName)} ${chalk.cyan(options)}`
        },
        {
            header: 'Actions:',
            content: [
                {
                    name: `${chalk.green('generate')}`,
                    shortcut: `${chalk.green('g')}`,
                    summary: 'Used to create a new module',
                }
            ]
        },
        {
            header: 'Options:',
            content: [
                {
                    name: `${chalk.cyan('--help')}`,
                    shortcut: `${chalk.cyan('-h')}`,
                    summary: 'Used to create a new module',
                }
            ]
        }
    ];
}
export { TEMPLATE_PROJECT_URL, USAGE_TEMPLATE, CLI_PROJECT_ROOT, TEMPLATE_ROOT, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxXQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUd4QixNQUFNLG9CQUFvQixHQUFHLFdBQVcsV0FBVyxFQUFFLDZDQUE2QyxDQUFDO0FBQ25HLE1BQU0sZ0JBQWdCLEdBQVcsU0FBUyxDQUFDO0FBQzNDLE1BQU0sYUFBYSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUU3RSxTQUFTLGNBQWMsQ0FDbkIsT0FBTyxHQUFHLE9BQU8sRUFDakIsTUFBTSxHQUFHLFVBQVUsRUFDbkIsT0FBTyxHQUFHLFdBQVcsRUFDckIsV0FBVyxHQUFHLGdCQUFnQixFQUM5QixPQUFPLEdBQUcsV0FBVztJQUNyQixPQUFPO1FBQ0g7WUFDSSxNQUFNLEVBQUUsUUFBUTtZQUNoQixPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDM0k7UUFDRDtZQUNJLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE9BQU8sRUFBRTtnQkFDTDtvQkFDSSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNsQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUMvQixPQUFPLEVBQUUsNkJBQTZCO2lCQUN6QzthQUNKO1NBQ0o7UUFDRDtZQUNJLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE9BQU8sRUFBRTtnQkFDTDtvQkFDSSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUMvQixRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUMvQixPQUFPLEVBQUUsNkJBQTZCO2lCQUN6QzthQUNKO1NBQ0o7S0FDSixDQUFDO0FBQ04sQ0FBQztBQUVELE9BQU8sRUFDSCxvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixhQUFhLEdBQ2hCLENBQUMifQ==