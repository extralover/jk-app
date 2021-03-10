import React from "react";
import { Link } from "react-router-dom";

const BoardDetail = () => {
  return (
    <div className="inner">
      {/* <h2>Board Detail</h2> */}
      <section className="detail-basic1">
        <dl>
          <dt>
            <h3 className="tit">
              Seegene’s saliva test for COVID-19 is just as effective as NPS
              test
            </h3>
            <p className="date">Feb 01, 2021</p>
          </dt>
          <dd>
            <div>
              <p className="file">
                Attach File :
                <Link
                  to="../upload/product_1553679878342992.png"
                  target="_blank"
                >
                  product_1553679878342992.png
                </Link>
              </p>
            </div>
            <div>
              <p>
                A new study shows that the less-invasive saliva test for
                COVID-19 gives just as accurate results as those of the
                nasopharyngeal specimen.
                <br />
                <br />
                A research team at the Department of Laboratory Medicine at
                Kangwon National University School of Medicine, led by Professor
                In-bum Suh, carried out the PCR test for COVID-19 on 90
                hospitalized individuals with suspected COVID-19, both with
                saliva and nasopharyngeal methods. In order to collect
                sufficient specimen, samples were collected from study
                participants, who were required to refrain from any activities
                including eating, drinking, and smoking, for 30 minutes after
                they got up in the morning.
                <br />
                <br />
                For the study, the research team had used Seegene's flagship
                COVID-19 tests, 'Allplex™ SARS-CoV-2 Assay' and 'Allplex™
                SARS-CoV-2/FluA/FluB/RSV Assay, both of which had been CE-IVD
                marked. While 'Allplex™ SARS-CoV-2 Assay' targets 4 different
                genes of COVID-19, 'Allplex™ SARS-CoV-2/FluA/FluB/RSV Assay' is
                known to detect and differentiate 8 target genes including
                COVID-19, influenza and RSV common cold.
                <br />
                <br />
                As a result, both 'Allplex™ SARS-CoV-2 Assay' and 'Allplex™
                SARS-CoV-2/FluA/FluB/RSV Assay' proved the saliva and
                nasopharyngeal test's percentage agreement for detecting
                COVID-19 was over 98.8%. That means Seegene's COVID-19
                diagnostic test gives equally accurate and effective test
                results for COVID-19 when testing saliva and nasopharyngeal
                specimen.
                <br />
                <br />
                Professor Suh, the lead researcher of the study said, "The
                demand for saliva-based COVID-19 tests is on the rise, as the
                world still battles with short supply of specimen collecting
                swab for nasopharyngeal tests." He added that the study has
                "clearly proven that saliva tests are just as accurate and
                effective as nasopharyngeal tests in precisely diagnosing
                COVID-19."
                <br />
                <br />
                The research team also conducted a separate study on
                extraction-free application, one without the nucleic acid
                extraction step, and found the percentage agreement between
                Seegene's extraction-free saliva test and extraction-free
                nasopharyngeal swab test to be over 96%. In other words, the
                extraction-free method using the saliva sampling would be just
                as applicable for the PCR test in detecting SARS-CoV-2.
                <br />
                <br />
                Generally in COVID-19 PCR tests, the nucleic acid extraction
                process is considered as a prerequisite in order to isolate and
                purify nucleic acid from specimens. Depending on the
                circumstances, however, some countries may not be fully equipped
                to carry out the extraction process. Some even face reagent
                shortages, despite a surge in testing capacity, eventually
                leading many laboratories to resort to extraction-free method.
                <br />
                <br />
                The implication of the study will be introduced during the 28th
                International Molecular Medicine Tri-Conference. The three-day
                conference will be held online due to COVID-19 pandemic starting
                February 16th. The Molecular Medicine Tri-Conference is one of
                the leading international meeting places for the precision
                medicine community, where leaders are invited to discuss the
                latest research and technologies in COVID-19 diagnostics and bio
                therapeutics.
              </p>
            </div>
          </dd>
        </dl>
      </section>
      <section className="btn-btm">
        <div className="btn-wrap">
          <Link to="./board-list" className="btn-box3 fr">
            List
          </Link>
          <Link to="./board-write" className="btn-box3">
            Modify
          </Link>
          <Link to="#delete" className="btn-box3">
            Delete
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BoardDetail;
