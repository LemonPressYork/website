//NOTE: can do order by change the +desc to +asc, something to consider

export const fetchIssues = async () => {
  var startIndex = 0;
  var pageSize = 30; // Max search result size is currently 30
  var documents = [];
  var fetchedAll = false;
  try {
    while (!fetchedAll) {
      let response = await fetch(
        `https://search.issuu.com/api/2_0/document?username=thelemonpress&responseParams=epoch,title&sortBy=epoch+desc&pageSize=${pageSize}&startIndex=${startIndex}`,
      );
      let result = await response.json();
      documents = documents.concat(result.response.docs);
      if (result.response.docs.length < 30) {
        fetchedAll = true;
      }

      console.log(documents);
    }
  } catch (error) {
    alert(`There was a problem fetching the print issues: ${error.toString()}`);
  }
};
