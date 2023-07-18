const downloadLink = document.querySelector('.dlFunc');
const downloadLink2 = document.querySelector('.dlFunc2');

const downloadFile = function (event) {
    event.preventDefault();

    const fileUrls = ['RESUME FORMAL.pdf', 'RESUME V2.pdf'];

    fileUrls.forEach(function (fileUrl) {
        const link = document.createElement('a');
        link.href = `files/${fileUrl}`;
        link.click();
        link.remove();
    });
}

downloadLink.addEventListener('click', downloadFile);
downloadLink2.addEventListener('click', downloadFile);