document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
  var user = document.getElementById('userName').value;
  var email = document.getElementById('emailId').value;
  var password = document.getElementById('password').value;
  var issueId = chance.guid();
  var issueStatus = 'Open';
  var issue = {
    id: issueId,
    user: user,
    email: email,
    password: password,
  }

  if (localStorage.getItem('issues') == null) {
    var issues = [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  } else {
    var issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  }
  document.getElementById('issueInputForm').reset();


  e.preventDefault();
}



function deleteIssue(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues.splice(i, 1);
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

}


