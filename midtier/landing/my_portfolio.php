<?php

class my_portfolio extends page_base {

    public function build(output $output) {
        $sanitized    = json_decode($this->post, true); //TODO: sanitizer
        $has_access   = $sanitized[cst_portfolio::p_has_access];
        $list_project = $this->retrieve_projects();

        $continue = true;
        $continue = $continue && ($has_access === true);
        $continue = $continue && (empty($list_project) === false);

        if ($continue === true) {
            $this->response[cst_portfolio::p_list_project] = $list_project;
            $this->set_response_pass();
        }
        $output->format($this->response, output::angular);
    }

    // --- helpers ---
    private function retrieve_projects() {
        $return = array(
            // DevOps
            array(
                cst_portfolio::p_title => 'DevOps',
                cst_portfolio::p_thumb => '',
            ),
            // LAB-MSERRANO
            array(
                cst_portfolio::p_title => 'lab.mserrano.net',
                cst_portfolio::p_thumb => '',
            ),
            // WWW-MSERRANO
            array(
                cst_portfolio::p_title => 'www.mserrano.net',
                cst_portfolio::p_thumb => '',
            ),
            // DOCS-MSERRANO
            array(
                cst_portfolio::p_title => 'docs.mserrano.net',
                cst_portfolio::p_thumb => '',
            ),
        );
        return $return;
    }

}
