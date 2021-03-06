import * as React from "react";
import Helmet from "react-helmet";

import "prismjs/themes/prism-okaidia.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../components/Header";
import LayoutRoot from "../components/LayoutRoot";
import LayoutMain from "../components/LayoutMain";
import Footer from "../components/Footer";
import ScrollToTop from "react-scroll-up";
import icon512 from "../../assets/icon.png";
import { StaticQuery, graphql } from "gatsby";
import Page from "../components/Page";

interface SiteMetaData {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      },
    };
}

interface WrapperProps {

}

const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const IndexLayout: React.SFC<WrapperProps> = ({ children }) => (
  <StaticQuery query={query}>
  { (data: SiteMetaData) =>
  <LayoutRoot>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: data.site.siteMetadata.description },
        { name: "keywords", content: "gatsbyjs, gatsby, javascript, sample, something" },
      ]}
      link={[
        { rel: "icon", type: "image/png", href: icon512 },
        { rel: "shortcut icon", type: "image/png", href: icon512 },
      ]}
    />
    <Header title={data.site.siteMetadata.title} />
    <LayoutMain>
      <Page>
      {children}
      </Page>
    </LayoutMain>
    <ScrollToTop showUnder={160}>
      <h3>UP</h3>
    </ScrollToTop>
    <Footer/>
  </LayoutRoot>
  }
  </StaticQuery>
);

export default IndexLayout;
