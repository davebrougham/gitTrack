$.getJSON('https://fmc-data-utils.s3.amazonaws.com/recent_results.json' , function(json_results) {
    var topStars = document.getElementById('top-stars').getContext('2d');
    var topWatchers = document.getElementById('top-watchers').getContext('2d');
    var topForks = document.getElementById('top-forks').getContext('2d');
    var chart = new Chart(topStars, {
        type: 'bar',
        data: {
            labels: _.pluck(json_results, 'name'),
            datasets: [
              {
                label: 'Stars',
                backgroundColor: '#801515',
                borderColor: '#801515',
                data: _.pluck(json_results, 'stargazers_count')
              }
            ]
        },
        options: {
          scales: {
            yAxes:[{
              ticks: {
                callback: function(value, index, values) {
                  return value / 1e3 + 'k';
                }
              }
            }]
          }
        }
    });
    var chart = new Chart(topWatchers, {
        type: 'bar',
        data: {
            labels: _.pluck(json_results, 'name'),
            datasets: [
              {
                label: 'Watchers',
                backgroundColor: '#FFAAAA',
                borderColor: '#FFAAAA',
                data: _.pluck(json_results, 'subscribers_count')
              },
            ]
        },
        options: {
          scales: {
            yAxes:[{
              ticks: {
                callback: function(value, index, values) {
                  return value / 1e3 + 'k';
                }
              }
            }]
          }
        }
    });
    var chart = new Chart(topForks, {
        type: 'bar',
        data: {
            labels: _.pluck(json_results, 'name'),
            datasets: [
              {
                label: 'Forks',
                backgroundColor: '#550000',
                borderColor: '#550000',
                data: _.pluck(json_results, 'forks_count')
              }
            ]
        },
        options: {
          scales: {
            yAxes:[{
              ticks: {
                callback: function(value, index, values) {
                  return value / 1e3 + 'k';
                }
              }
            }]
          }
        }
    });
    
});