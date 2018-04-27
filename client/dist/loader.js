window.onload = () => {
  const modules = [
    { uri: 'http://ec2-13-57-175-222.us-west-1.compute.amazonaws.com', css: '/style.css' },
    { uri: 'http://ec2-13-59-188-143.us-east-2.compute.amazonaws.com', css: '/style.css' },
    { uri: 'http://ec2-52-34-86-177.us-west-2.compute.amazonaws.com', css: '/styles.css' },
  ];

  modules.forEach((module) => {
    const script = document.createElement('script');
    script.src = `${module.uri}/bundle.js`;
    document.getElementsByTagName('head')[0].appendChild(script);

    const link = document.createElement('link');
    link.href = module.uri + module.css;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(link);
  });

  const { pathname } = window.location;
  const company = pathname.slice(pathname.lastIndexOf('/', pathname.length - 2) + 1, -1);
  document.getElementsByClassName('content-head__company')[0].textContent = company;
};
