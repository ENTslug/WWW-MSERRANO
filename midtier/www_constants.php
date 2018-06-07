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
                'Access'   => cst_portfolio::p_has_access,
                'Projects' => cst_portfolio::p_list_project,
                'Thumb'    => cst_portfolio::p_thumb,
                'Title'    => cst_portfolio::p_title,
            ),
        );
        return $return;
    }

}
