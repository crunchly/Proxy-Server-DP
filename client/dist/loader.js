window.onload = () => {
  const modules = [
    { uri: 'http://ec2-13-57-175-222.us-west-1.compute.amazonaws.com', css: '/style.css' },
    { uri: 'http://ec2-13-59-188-143.us-east-2.compute.amazonaws.com', css: '/style.css' },
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
};
