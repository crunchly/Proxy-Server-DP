window.onload = () => {
  const links = [
    'http://ec2-13-57-175-222.us-west-1.compute.amazonaws.com/bundle.js',
    'http://ec2-13-59-188-143.us-east-2.compute.amazonaws.com/bundle.js',
  ];

  links.forEach((link) => {
    const tag = document.createElement('script');
    tag.src = link;
    document.getElementsByTagName('head')[0].appendChild(tag);
  });
};
