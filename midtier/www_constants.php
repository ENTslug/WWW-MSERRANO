<?php

class www_constants extends page_base {

    public function build(output $output) {
        $this->response = $this->setup_constants();
        $output->format($this->response, output::angular);
    }

    // --- helpers ---
    private function setup_constants() {
        $return = array(
            'Default'        => array(
                'Date' => date('Y-m-d'),
            ),
            'Infrastructure' => array(
                'Result' => cst_infrastructure::result,
                'Pass'   => cst_infrastructure::pass,
                'Fail'   => cst_infrastructure::fail,
            ),
            'P'              => array(
                'GitHub'       => cst_portfolio::p_github,
                'HasAccess'    => cst_portfolio::p_has_access,
                'IsPrivate'    => cst_portfolio::p_is_private,
                'Key'          => cst_portfolio::p_key,
                'ProjectInfo'  => cst_portfolio::p_project_info,
                'NotAvail'     => cst_portfolio::p_not_avail,
                'Organization' => cst_portfolio::p_organization,
                'Url'          => cst_portfolio::p_url,
            ),
            'Org'            => array(
                'volunteer' => cst_portfolio::org_volunteer,
                'hpulse'    => cst_portfolio::org_hpulse,
                'mserrano'  => cst_portfolio::org_mserrano,
            ),
            'Key'            => array(
                'cygnus'          => cst_portfolio::key_cygnus,
                'hpl_com'         => cst_portfolio::key_hpl_com,
                'pulsemobile'     => cst_portfolio::key_pulsemobile,
                'internalc'       => cst_portfolio::key_internalc,
                'pulsebooker'     => cst_portfolio::key_pulsebooker,
                'pulselink'       => cst_portfolio::key_pulselink,
                'pulsebooker_cro' => cst_portfolio::key_pulsebooker_cro,
                'lab'             => cst_portfolio::key_lab,
                'devops'          => cst_portfolio::key_devops,
                'www'             => cst_portfolio::key_www,
                'docs'            => cst_portfolio::key_docs,
            ),
        );
        return $return;
    }

}
