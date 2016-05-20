<?php  namespace App;

use Eloquent;
use Validator;


class ClientReport extends Eloquent{

    protected $table = 'client_reports';

    protected $fillable = ['id', 'report_name', 'client_id'];

    protected $hidden = ['password', 'remember_token'];

    public function client()
    {
        return $this->belongsTo("App\User", "client_id");
    }

}
